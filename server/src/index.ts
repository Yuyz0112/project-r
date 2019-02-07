import * as path from 'path';
import { GraphQLServer, Options } from 'graphql-yoga';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import { prisma } from './generated/prisma-client';
import {
  Resolvers,
  AppResolvers,
  SessionResolvers,
  EventResolvers,
} from './generated/graphqlgen';

const resolvers: Resolvers = {
  Query: {
    apps(parent, args, context) {
      return context.prisma.apps({});
    },
    events(parent, args, context) {
      return context.prisma.events({
        where: {
          sessionId: args.sessionId,
        },
        orderBy: 'timestamp_ASC',
      });
    },
  },
  Mutation: {
    createApp(parent, args, context) {
      return context.prisma.createApp({
        name: args.name,
      });
    },
  },
  App: {
    ...AppResolvers.defaultResolvers,
    sessions(parent, args, context) {
      return context.prisma.app({ id: parent.id }).sessions({
        where: {
          lastEventTime_not: null,
        },
      });
    },
  },
  Session: {
    ...SessionResolvers.defaultResolvers,
    app(parent, args, context) {
      return context.prisma.session({ id: parent.id }).app();
    },
  },
  Event: {
    ...EventResolvers.defaultResolvers,
  },
};

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './schema.graphql'),
  //FIXME: https://github.com/prisma/graphqlgen/issues/15
  resolvers: resolvers as any,
  context: {
    prisma,
  },
});

const options: Options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  bodyParserOptions: {
    limit: '50mb',
  },
};

server.use(bodyParser.json({ limit: '50mb' }));

if (process.env.SECRET) {
  const basicAuthMiddleware = basicAuth({
    users: {
      'admin': process.env.SECRET
    }
  })
  server.use((req, res, next) => {
    if (
      req.url === options.playground ||
      req.url === options.subscriptions ||
      req.url === options.endpoint ||
      req.url === '/sessions' ||
      req.url === '/events:batch'
    ) {
      return next();
    }
    return basicAuthMiddleware(req, res, next);
  })
}

server.post('/sessions', async (req, res) => {
  const newSession = await prisma.createSession({
    app: {
      connect: {
        id: req.body.appId,
      },
    },
  });
  res.json(newSession);
});

server.post('/events:batch', async (req, res) => {
  const { sessionId, events } = req.body;
  for (const event of events) {
    await prisma.createEvent({
      ...event,
      timestamp: new Date(event.timestamp),
      sessionId: sessionId,
    });
  }
  if (events.length > 0) {
    const lastEvent = events[events.length - 1];
    await prisma.updateSession({
      data: {
        lastEventTime: new Date(lastEvent.timestamp),
      },
      where: {
        id: sessionId,
      },
    });
  }
  res.send('ok');
});

server.express.use(express.static(path.resolve(__dirname, '../../build')));
server.express.get('*', (req, res, next) => {
  if (
    req.url === options.playground ||
    req.url === options.subscriptions ||
    req.url === options.endpoint
  ) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);
