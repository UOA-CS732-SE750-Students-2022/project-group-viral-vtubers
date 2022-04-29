import { gql } from 'apollo-angular';

import { ArtistFragment } from '../fragments/user.fragment';

export const artistsQuery = gql`
  query Artists($cursor: String, $limit: Int) {
    {
      users(cursor: $cursor, limit: $limit) {
        edges {
          cursor 
          node {
            ...ArtistFragment
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
  ${ArtistFragment}
`;
