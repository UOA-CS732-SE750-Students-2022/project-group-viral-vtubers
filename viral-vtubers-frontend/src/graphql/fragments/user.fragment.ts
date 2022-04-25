import { gql } from 'apollo-angular';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    bio
    completedCommissions
    displayName
    email
    likes
    profileImageURI
    following
  }
`;
