import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/**
 *  Main schema file that defines all types and Query root
 *  Message type definition
 */
export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Message mutations */
  createMessage: Message;
};

export type Query = {
  __typename?: 'Query';
  /**  Message queries */
  latestMessages: Array<Maybe<Message>>;
};


export type QueryLatestMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type GetLatestMessagesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetLatestMessagesQuery = { __typename?: 'Query', latestMessages: Array<{ __typename?: 'Message', id: string, content: string, createdAt: string } | null> };

export type CreateMessageMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string, content: string, createdAt: string } };


export const GetLatestMessagesDocument = gql`
    query GetLatestMessages($limit: Int) {
  latestMessages(limit: $limit) {
    id
    content
    createdAt
  }
}
    `;

/**
 * __useGetLatestMessagesQuery__
 *
 * To run a query within a React component, call `useGetLatestMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestMessagesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>(GetLatestMessagesDocument, options);
      }
export function useGetLatestMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>(GetLatestMessagesDocument, options);
        }
export function useGetLatestMessagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>(GetLatestMessagesDocument, options);
        }
export type GetLatestMessagesQueryHookResult = ReturnType<typeof useGetLatestMessagesQuery>;
export type GetLatestMessagesLazyQueryHookResult = ReturnType<typeof useGetLatestMessagesLazyQuery>;
export type GetLatestMessagesSuspenseQueryHookResult = ReturnType<typeof useGetLatestMessagesSuspenseQuery>;
export type GetLatestMessagesQueryResult = Apollo.QueryResult<GetLatestMessagesQuery, GetLatestMessagesQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage {
  createMessage {
    id
    content
    createdAt
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;