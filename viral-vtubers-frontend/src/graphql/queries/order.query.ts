import { gql } from 'apollo-angular';

import {
  MyCommissionsFragment,
  MyOrdersFragment,
  OrderPaginationFragment,
} from '../fragments/order.fragment';

export const order = gql`
  query Order($id: ID!) {
    order(id: $id) {
      ...OrderFragment
    }
  }
`;

export const orders = gql`
  query Orders($cursor: String, $limit: Int) {
    orders(cursor: $cursor, limit: $limit) {
      ...OrderPaginationFragment
    }
  }
  ${OrderPaginationFragment}
`;

export const myOrders = gql`
  query MyOrders {
    myOrders {
      ...MyOrdersFragment
    }
  }
  ${MyOrdersFragment}
`;

export const myCommissions = gql`
  query MyCommissions {
    myCommissions {
      ...MyCommissionsFragment
    }
  }
  ${MyCommissionsFragment}
`;
