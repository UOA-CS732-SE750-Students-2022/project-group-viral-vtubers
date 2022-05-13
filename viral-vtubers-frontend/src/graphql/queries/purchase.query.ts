import { gql } from 'apollo-angular';

import { PurchaseFragment } from '../fragments/purchase.fragment';
export const purchasesQuery = gql`
  query Purchases {
    purchases {
      ...PurchaseFragment
    }
  }
  ${PurchaseFragment}
`;

export const salesQuery = gql`
  query Sales {
    sales {
      ...PurchaseFragment
    }
  }
  ${PurchaseFragment}
`;
