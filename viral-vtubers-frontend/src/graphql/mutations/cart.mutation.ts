import { gql } from 'apollo-angular';

import { CartFragment } from '../fragments/cart.fragment';

export const addToCartMutation = gql`
  mutation AddToCart($productId: ID!, $variantId: ID!) {
    addToCart(productId: $productId, variantId: $variantId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;

export const removeFromCart = gql`
  mutation RemoveFromCart($productId: ID!, $variantId: ID!) {
    removeFromCart(productId: $productId, variantId: $variantId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;

export const emptyCart = gql`
  mutation EmptyCart($sellerId: ID) {
    emptyCart(sellerId: $sellerId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;

export const checkout = gql`
  mutation Checkout($sellerId: ID) {
    checkout(sellerId: $sellerId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;
