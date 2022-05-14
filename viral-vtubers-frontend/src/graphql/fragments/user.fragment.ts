import { gql } from 'apollo-angular';

import { TagFragment } from './tag.fragment';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    bio
    status
    numCompletedCommissions
    displayName
    email
    numLikes
    profileImageURI
    isFollowing
  }
`;

export const UserProfileFragment = gql`
  fragment UserProfileFragment on User {
    id
    bio
    status
    numCompletedCommissions
    displayName
    numLikes
    profileImageURI
    isFollowing
    tags {
      ...TagFragment
    }
    services {
      description
      id
      name
      price
      priceType
    }
    products {
      id
      name
      minPrice
      variants {
        id
        name
        price
      }
      titleImage
    }
  }

  ${TagFragment}
`;

export const ArtistFragment = gql`
  fragment ArtistFragment on User {
    id
    displayName
    numCompletedCommissions
    numLikes
    profileImageURI
    isFollowing
    tags {
      ...TagFragment
    }
  }

  ${TagFragment}
`;

export const ArtistPaginationFragment = gql`
  fragment ArtistPaginationFragment on UserPagination {
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

  ${ArtistFragment}
`;

export const UserBlurbFragment = gql`
  fragment UserBlurbFragment on User {
    id
    displayName
    status
    profileImageURI
  }
`;

export const UserAccountFragment = gql`
  fragment UserAccountFragment on User {
    id
    displayName
    email
    following {
      ...UserBlurbFragment
    }
    followers {
      ...UserBlurbFragment
    }
  }
  ${UserBlurbFragment}
`;
