import { gql } from 'apollo-angular';

import {
  MyCommissionsFragment,
  MyOrdersFragment,
} from '../fragments/order.fragment';

export const order = gql`
  query Order($id: ID!) {
    order(id: $id) {
      ...OrderFragment
    }
  }
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
  query MyCommisions {
    myCommissions {
      ...MyCommissionsFragment
    }
  }
  ${MyCommissionsFragment}
`;
