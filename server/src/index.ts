import * as path from 'path';
import { GraphQLServer, Options } from 'graphql-yoga';
import * as bodyParser from 'body-parser';
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
  },
  Mutation: {
    createApp(parent, args, context) {
      return context.prisma.createApp({
        name: args.name,
      });
    },
    listEvents(parent, args, context) {
      return context.prisma.events({
        where: {
          sessionId: args.sessionId,
        },
      });
    },
  },
  App: {
    ...AppResolvers.defaultResolvers,
    sessions(parent, args, context) {
      return context.prisma.app({ id: parent.id }).sessions();
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
    prisma.createEvent({
      ...event,
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

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);
