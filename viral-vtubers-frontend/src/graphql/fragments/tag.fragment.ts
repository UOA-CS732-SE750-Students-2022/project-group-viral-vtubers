import { gql } from 'apollo-angular';

export const TagFragment = gql`
  fragment TagFragment on Tag {
    backgroundColor
    color
    id
    name
  }
`;
