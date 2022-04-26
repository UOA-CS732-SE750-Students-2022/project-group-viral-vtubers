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
