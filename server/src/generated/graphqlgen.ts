// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import { App, Session, Event } from './prisma-client';
import { Context } from '../context';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type AppsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => App[] | Promise<App[]>)
    | {
        fragment: string;
        resolver: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App[] | Promise<App[]>;
      };

  export interface Type {
    apps:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App[] | Promise<App[]>)
      | {
          fragment: string;
          resolver: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => App[] | Promise<App[]>;
        };
  }
}

export namespace AppResolvers {
  export const defaultResolvers = {
    id: (parent: App) => parent.id,
    name: (parent: App) => parent.name,
    createdAt: (parent: App) => parent.createdAt,
  };

  export type IdResolver =
    | ((
        parent: App,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: App,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type SessionsResolver =
    | ((
        parent: App,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Session[] | Promise<Session[]>)
    | {
        fragment: string;
        resolver: (
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Session[] | Promise<Session[]>;
      };

  export type CreatedAtResolver =
    | ((
        parent: App,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: App,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: App,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    sessions:
      | ((
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Session[] | Promise<Session[]>)
      | {
          fragment: string;
          resolver: (
            parent: App,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Session[] | Promise<Session[]>;
        };

    createdAt:
      | ((
          parent: App,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: App,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };
  }
}

export namespace SessionResolvers {
  export const defaultResolvers = {
    id: (parent: Session) => parent.id,
    eventCount: (parent: Session) => parent.eventCount,
    lastEventTime: (parent: Session) => parent.lastEventTime,
    createdAt: (parent: Session) => parent.createdAt,
  };

  export type IdResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type EventCountResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => number | Promise<number>;
      };

  export type LastEventTimeResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type EventsResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Event[] | Promise<Event[]>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Event[] | Promise<Event[]>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type AppResolver =
    | ((
        parent: Session,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => App | null | Promise<App | null>)
    | {
        fragment: string;
        resolver: (
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App | null | Promise<App | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    eventCount:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => number | Promise<number>;
        };

    lastEventTime:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    events:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Event[] | Promise<Event[]>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Event[] | Promise<Event[]>;
        };

    createdAt:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    app:
      | ((
          parent: Session,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App | null | Promise<App | null>)
      | {
          fragment: string;
          resolver: (
            parent: Session,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => App | null | Promise<App | null>;
        };
  }
}

export namespace EventResolvers {
  export const defaultResolvers = {
    id: (parent: Event) => parent.id,
    type: (parent: Event) => parent.type,
    data: (parent: Event) => parent.data,
    createdAt: (parent: Event) => parent.createdAt,
  };

  export type IdResolver =
    | ((
        parent: Event,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type TypeResolver =
    | ((
        parent: Event,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolver: (
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => number | Promise<number>;
      };

  export type DataResolver =
    | ((
        parent: Event,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Event,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolver: (
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>;
      };

  export type SessionResolver =
    | ((
        parent: Event,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => Session | null | Promise<Session | null>)
    | {
        fragment: string;
        resolver: (
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Session | null | Promise<Session | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Event,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    type:
      | ((
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolver: (
            parent: Event,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => number | Promise<number>;
        };

    data:
      | ((
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Event,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    createdAt:
      | ((
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolver: (
            parent: Event,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => string | Promise<string>;
        };

    session:
      | ((
          parent: Event,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => Session | null | Promise<Session | null>)
      | {
          fragment: string;
          resolver: (
            parent: Event,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => Session | null | Promise<Session | null>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateApp {
    name: string;
  }

  export type CreateAppResolver =
    | ((
        parent: undefined,
        args: ArgsCreateApp,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => App | null | Promise<App | null>)
    | {
        fragment: string;
        resolver: (
          parent: undefined,
          args: ArgsCreateApp,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App | null | Promise<App | null>;
      };

  export interface Type {
    createApp:
      | ((
          parent: undefined,
          args: ArgsCreateApp,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => App | null | Promise<App | null>)
      | {
          fragment: string;
          resolver: (
            parent: undefined,
            args: ArgsCreateApp,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => App | null | Promise<App | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  App: AppResolvers.Type;
  Session: SessionResolvers.Type;
  Event: EventResolvers.Type;
  Mutation: MutationResolvers.Type;
}
