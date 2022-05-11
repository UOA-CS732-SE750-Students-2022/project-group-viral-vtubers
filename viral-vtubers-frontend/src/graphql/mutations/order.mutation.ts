import { gql } from 'apollo-angular';

import { OrderFragment } from '../fragments/order.fragment';

export const addOrder = gql`
  mutation AddOrder($input: AddOrderInput!) {
    addOrder(input: $input) {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;

export const editOrder = gql`
  mutation EditOrder($input: EditOrderInput!) {
    editOrder(input: $input) {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;

export const deleteOrder = gql`
  mutation DeleteOrder($id: ID!) {
    deleteOrder(id: $id) {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;

export const applyOrder = gql`
  mutation ApplyOrder($id: ID!) {
    applyOrder(id: $id) {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;
