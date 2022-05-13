import { gql } from 'apollo-angular';

import { PurchaseFragment, SaleFragment } from '../fragments/purchase.fragment';
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
      ...SaleFragment
    }
  }
  ${SaleFragment}
`;
