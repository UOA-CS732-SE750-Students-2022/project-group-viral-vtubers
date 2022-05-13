import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FieldFunctionOptions,
  FieldMergeFunction,
  Reference,
  StoreObject,
} from '@apollo/client/cache';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';
import {
  ApolloClientOptions,
  ApolloLink,
  from,
  InMemoryCache,
  ServerError,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ProductPagination } from 'src/schema/type';

const uri = 'http://localhost:8080/graphql'; // <-- add the URL of the GraphQL server here

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const merge: FieldMergeFunction<
  ProductPagination,
  ProductPagination,
  FieldFunctionOptions<Record<string, string>, Record<string, any>>
> = (existing, incoming, { args, readField }) => {
  if (!existing) {
    return incoming;
  }
  const newExisting: DeepWriteable<typeof existing> = existing;
  const cursor = args?.['cursor'] ?? '';
  const merged = existing.edges.slice(0);
  let offset = offsetFromCursor(merged, cursor, readField);
  // If we couldn't find the cursor, default to appending to
  // the end of the list, so we don't lose any data.
  if (offset < 0) offset = merged.length;
  // Now that we have a reliable offset, the rest of this logic
  // is the same as in offsetLimitPagination.
  for (let i = 0; i < incoming.edges.length; ++i) {
    merged[offset + i] = incoming.edges[i];
  }

  newExisting.edges = merged;
  newExisting.pageInfo.endCursor = incoming.pageInfo.endCursor;
  newExisting.pageInfo.hasNextPage = incoming.pageInfo.hasNextPage;

  return newExisting;
};

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          keyArgs: ['filter', 'sort'],
          merge,
        },
        orders: {
          keyArgs: ['filter', 'sort'],
          merge,
        },
      },
    },
    Category: {
      fields: {
        products: {
          keyArgs: ['filter', 'sort'],
          merge,
        },
      },
    },
    Subcategory: {
      fields: {
        products: {
          keyArgs: ['filter', 'sort'],
          merge,
        },
      },
    },
  },
});

// Check https://apollo-angular.com/docs/data/pagination/#cursor-based
function offsetFromCursor(
  items: (Reference | StoreObject)[],
  cursor: string,
  readField: ReadFieldFunction
) {
  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i];
    if (readField('cursor', item) === cursor) {
      return i + 1;
    }
  }
  return -1;
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const middleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('token') || null}`
      ),
    });
    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError = {} as any }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) {
      console.log(`[Network error]: ${JSON.stringify(networkError)}`);
      if (networkError.status && networkError.status === 401) {
        console.log(`[Network error]: ${networkError}`);
        localStorage.removeItem('token');
        if (window.location.pathname !== '/signin') {
          window.location.reload();
          window.location.href = '/signin';
        }
      }
    }
  });

  const link = middleware.concat(httpLink.create({ uri }));

  return {
    link: from([errorLink, link]),
    cache: cache,
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
