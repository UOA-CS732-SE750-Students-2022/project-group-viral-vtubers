import { gql } from 'apollo-angular';

import { ProductBlurbFragment } from '../fragments/product.fragment';
import {
  ArtistFragment,
  UserProfileFragment,
} from '../fragments/user.fragment';

export const artistsQuery = gql`
  query Artists($cursor: String, $limit: Int) {
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
  ${ArtistFragment}
`;

export const userProfileQuery = gql`
  query UserProfile($id: ID!) {
    user(id: $id) {
      ...UserProfileFragment
    }
  }

  ${UserProfileFragment}
`;

export const userLikedProductQuery = gql`
  query UserLikedProduct($id: ID!) {
    user(id: $id) {
      ...UserProfileFragment
      likedProduct {
        ...ProductBlurbFragment
      }
    }
  }

  ${UserProfileFragment}
  ${ProductBlurbFragment}
`;
