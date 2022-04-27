import { gql } from 'apollo-angular';

import { UserFragment } from '../fragments/user.fragment';

export const loginMutation = gql`
  mutation Login {
    login {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
