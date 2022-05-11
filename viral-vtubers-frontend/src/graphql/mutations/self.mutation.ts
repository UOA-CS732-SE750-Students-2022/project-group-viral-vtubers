import { gql } from 'apollo-angular';

import { UserFragment } from '../fragments/user.fragment';

export const editSelfMutation = gql`
  mutation EditSelf($input: EditSelfInput!) {
    editSelf(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const loginMutation = gql`
  mutation Login {
    login {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
