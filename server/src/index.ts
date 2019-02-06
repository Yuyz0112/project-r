import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
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
  },
  App: {
    ...AppResolvers.defaultResolvers,
    sessions(parent, args, context) {
      return context.prisma.app({ id: parent.id }).sessions();
    },
  },
  Session: {
    ...SessionResolvers.defaultResolvers,
    events(parent, args, context) {
      return context.prisma.session({ id: parent.id }).events();
    },
    app(parent, args, context) {
      return context.prisma.session({ id: parent.id }).app();
    },
  },
  Event: {
    ...EventResolvers.defaultResolvers,
    session(parent, args, context) {
      return context.prisma.event({ id: parent.id }).session();
    },
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

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);
