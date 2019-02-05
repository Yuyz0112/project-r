// ====================================================
// Documents
// ====================================================

export type GetPublishedPostsVariables = {};

export type GetPublishedPostsQuery = {
  __typename?: 'Query';

  publishedPosts: GetPublishedPostsPublishedPosts[];
};

export type GetPublishedPostsPublishedPosts = {
  __typename?: 'Post';

  id: string;

  title: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetPublishedPostsDocument = gql`
  query getPublishedPosts {
    publishedPosts {
      id
      title
    }
  }
`;
export class GetPublishedPostsComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetPublishedPostsQuery, GetPublishedPostsVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetPublishedPostsQuery, GetPublishedPostsVariables>
        query={GetPublishedPostsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetPublishedPostsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPublishedPostsQuery, GetPublishedPostsVariables>
> &
  TChildProps;
export function GetPublishedPostsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPublishedPostsQuery,
        GetPublishedPostsVariables,
        GetPublishedPostsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetPublishedPostsQuery,
    GetPublishedPostsVariables,
    GetPublishedPostsProps<TChildProps>
  >(GetPublishedPostsDocument, operationOptions);
}
