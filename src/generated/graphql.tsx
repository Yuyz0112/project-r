export type Maybe<T> = T | null;

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

  sessions: GetAppsSessions[];

  createdAt: string;
};

export type GetAppsSessions = {
  __typename?: 'Session';

  id: string;

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
