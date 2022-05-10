import { gql } from 'apollo-angular';

import { CartFragment } from '../fragments/cart.fragment';

export const cartQuery = gql`
  query Cart {
    carts {
      ...CartFragment
    }
  }
  ${CartFragment}
`;
