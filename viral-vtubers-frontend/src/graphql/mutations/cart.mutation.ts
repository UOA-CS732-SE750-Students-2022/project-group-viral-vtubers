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
  mutation removeFromCart($productId: ID!, $variantId: ID!) {
    removeFromCart(productId: $productId, variantId: $variantId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;

export const emptyCart = gql`
  mutation emptyCart($sellerId: ID) {
    emptyCart(sellerId: $sellerId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;

export const checkout = gql`
  mutation checkout($sellerId: ID) {
    emptyCart(sellerId: $sellerId) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;
