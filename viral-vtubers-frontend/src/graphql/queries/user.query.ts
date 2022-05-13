import { gql } from 'apollo-angular';

import { ProductBlurbFragment } from '../fragments/product.fragment';
import {
  ArtistPaginationFragment,
  UserFragment,
  UserProfileFragment,
} from '../fragments/user.fragment';

export const artistsQuery = gql`
  query Artists($cursor: String, $limit: Int) {
    users(cursor: $cursor, limit: $limit) {
      ...ArtistPaginationFragment
    }
  }
  ${ArtistPaginationFragment}
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

export const userByNameQuery = gql`
  query UserByName($name: String!) {
    userByName(name: $name) {
      ...UserFragment
    }
  }

  ${UserFragment}
`;
