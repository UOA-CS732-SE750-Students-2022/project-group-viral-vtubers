import { gql } from 'apollo-angular';

import { UserFragment } from '../fragments/user.fragment';

export const followMutation = gql`
  mutation Follow($id: ID!, $follow: Boolean!) {
    follow(id: $id, follow: $follow) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
