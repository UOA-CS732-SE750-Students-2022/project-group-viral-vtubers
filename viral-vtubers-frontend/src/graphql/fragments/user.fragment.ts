import { gql } from 'apollo-angular';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    bio
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
    numCompletedCommissions
    displayName
    numLikes
    profileImageURI
    isFollowing
    tags {
      id
      name
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
      price
      images
    }
  }
`;
