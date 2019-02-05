import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import {
  Resolvers,
  PostResolvers,
  UserResolvers,
} from './generated/graphqlgen';

const resolvers: Resolvers = {
  Query: {
    publishedPosts(parent, args, context) {
      return context.prisma.posts({ where: { published: true } });
    },
    post(parent, args, context) {
      return context.prisma.post({ id: args.postId });
    },
    postsByUser(parent, args, context) {
      return context.prisma
        .user({
          id: args.userId,
        })
        .posts();
    },
  },
  Mutation: {
    createDraft(parent, args, context) {
      return context.prisma.createPost({
        title: args.title,
        author: {
          connect: { id: args.userId },
        },
      });
    },
    publish(parent, args, context) {
      return context.prisma.updatePost({
        where: { id: args.postId },
        data: { published: true },
      });
    },
    createUser(parent, args, context) {
      return context.prisma.createUser({ name: args.name });
    },
  },
  User: {
    ...UserResolvers.defaultResolvers,
    posts(parent, args, context) {
      return context.prisma
        .user({
          id: parent.id,
        })
        .posts();
    },
  },
  Post: {
    ...PostResolvers.defaultResolvers,
    author(parent, args, context) {
      return context.prisma
        .post({
          id: parent.id,
        })
        .author();
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
