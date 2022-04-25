import { gql } from 'apollo-angular';

import { UserFragment } from '../fragments/user.fragment';

export const selfQuery = gql`
  query Self {
    self {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
