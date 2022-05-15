import { NgModule } from '@angular/core';
import {
  FieldFunctionOptions,
  FieldMergeFunction,
  Reference,
  StoreObject,
} from '@apollo/client/cache';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';
import { from, InMemoryCache } from '@apollo/client/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createAuthLink } from 'src/graphql/middleware/auth';
import { errorLink } from 'src/graphql/middleware/error';
import { ProductPagination } from 'src/schema/type';

import { AuthService } from './shared/auth/auth.service';

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

@NgModule({
  exports: [ApolloModule],
})
export class GraphQLModule {
  constructor(apollo: Apollo, authService: AuthService, httpLink: HttpLink) {
    const authLink = createAuthLink(authService);

    const link = httpLink.create({ uri });

    apollo.create({
      link: from([errorLink, authLink, link]),
      cache: cache,
    });
  }
}
