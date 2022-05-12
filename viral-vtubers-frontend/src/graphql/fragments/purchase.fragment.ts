import { gql } from 'apollo-angular';

import { ItemFragment } from './cart.fragment';
import { UserBlurbFragment } from './user.fragment';

export const PurchaseFragment = gql`
  fragment PurchaseFragment on Purchase {
    id
    placed
    seller {
      ...UserBlurbFragment
    }
    items {
      ...ItemFragment
    }
  }
  ${ItemFragment}
  ${UserBlurbFragment}
`;
