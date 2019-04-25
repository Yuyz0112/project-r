export type Maybe<T> = T | null;

export interface SessionWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  firstEventTime?: Maybe<string>;

  firstEventTime_not?: Maybe<string>;

  firstEventTime_in?: Maybe<string[]>;

  firstEventTime_not_in?: Maybe<string[]>;

  firstEventTime_lt?: Maybe<string>;

  firstEventTime_lte?: Maybe<string>;

  firstEventTime_gt?: Maybe<string>;

  firstEventTime_gte?: Maybe<string>;

  lastEventTime?: Maybe<string>;

  lastEventTime_not?: Maybe<string>;

  lastEventTime_in?: Maybe<string[]>;

  lastEventTime_not_in?: Maybe<string[]>;

  lastEventTime_lt?: Maybe<string>;

  lastEventTime_lte?: Maybe<string>;

  lastEventTime_gt?: Maybe<string>;

  lastEventTime_gte?: Maybe<string>;

  createdAt?: Maybe<string>;

  createdAt_not?: Maybe<string>;

  createdAt_in?: Maybe<string[]>;

  createdAt_not_in?: Maybe<string[]>;

  createdAt_lt?: Maybe<string>;

  createdAt_lte?: Maybe<string>;

  createdAt_gt?: Maybe<string>;

  createdAt_gte?: Maybe<string>;

  app?: Maybe<AppWhereInput>;

  referrer?: Maybe<string>;

  referrer_not?: Maybe<string>;

  referrer_in?: Maybe<string[]>;

  referrer_not_in?: Maybe<string[]>;

  referrer_lt?: Maybe<string>;

  referrer_lte?: Maybe<string>;

  referrer_gt?: Maybe<string>;

  referrer_gte?: Maybe<string>;

  referrer_contains?: Maybe<string>;

  referrer_not_contains?: Maybe<string>;

  referrer_starts_with?: Maybe<string>;

  referrer_not_starts_with?: Maybe<string>;

  referrer_ends_with?: Maybe<string>;

  referrer_not_ends_with?: Maybe<string>;

  AND?: Maybe<SessionWhereInput[]>;
}

export interface AppWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  sessions_some?: Maybe<SessionWhereInput>;

  createdAt?: Maybe<string>;

  createdAt_not?: Maybe<string>;

  createdAt_in?: Maybe<string[]>;

  createdAt_not_in?: Maybe<string[]>;

  createdAt_lt?: Maybe<string>;

  createdAt_lte?: Maybe<string>;

  createdAt_gt?: Maybe<string>;

  createdAt_gte?: Maybe<string>;

  AND?: Maybe<AppWhereInput[]>;
}

export enum SessionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstEventTimeAsc = 'firstEventTime_ASC',
  FirstEventTimeDesc = 'firstEventTime_DESC',
  LastEventTimeAsc = 'lastEventTime_ASC',
  LastEventTimeDesc = 'lastEventTime_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ReferrerAsc = 'referrer_ASC',
  ReferrerDesc = 'referrer_DESC',
  UtmAsc = 'utm_ASC',
  UtmDesc = 'utm_DESC',
}

export type DateTime = string;

export type Json = any;

// ====================================================
// Documents
// ====================================================

export type GetAppsVariables = {};

export type GetAppsQuery = {
  __typename?: 'Query';

  apps: GetAppsApps[];
};

export type GetAppsApps = {
  __typename?: 'App';

  id: string;

  name: string;

  sessions: Maybe<GetAppsSessions[]>;

  createdAt: string;
};

export type GetAppsSessions = {
  __typename?: 'Session';

  id: string;

  firstEventTime: Maybe<string>;

  lastEventTime: Maybe<string>;

  createdAt: string;

  referrer: Maybe<string>;

  utm: Maybe<Json>;
};

export type GetEventsVariables = {
  sessionId: string;
};

export type GetEventsQuery = {
  __typename?: 'Query';

  events: GetEventsEvents[];
};

export type GetEventsEvents = {
  __typename?: 'EventWithStringData';

  timestamp: string;

  type: number;

  data: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetAppsDocument = gql`
  query getApps {
    apps {
      id
      name
      sessions {
        id
        firstEventTime
        lastEventTime
        createdAt
        referrer
        utm
      }
      createdAt
    }
  }
`;
export class GetAppsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAppsQuery, GetAppsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAppsQuery, GetAppsVariables>
        query={GetAppsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetAppsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAppsQuery, GetAppsVariables>
> &
  TChildProps;
export function GetAppsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAppsQuery,
        GetAppsVariables,
        GetAppsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetAppsQuery,
    GetAppsVariables,
    GetAppsProps<TChildProps>
  >(GetAppsDocument, operationOptions);
}
export const GetEventsDocument = gql`
  query getEvents($sessionId: String!) {
    events(sessionId: $sessionId) {
      timestamp
      type
      data
    }
  }
`;
export class GetEventsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetEventsQuery, GetEventsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetEventsQuery, GetEventsVariables>
        query={GetEventsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetEventsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetEventsQuery, GetEventsVariables>
> &
  TChildProps;
export function GetEventsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetEventsQuery,
        GetEventsVariables,
        GetEventsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetEventsQuery,
    GetEventsVariables,
    GetEventsProps<TChildProps>
  >(GetEventsDocument, operationOptions);
}
