import { gql } from 'apollo-angular';

import { UserBlurbFragment } from './user.fragment';

export const ItemFragment = gql`
  fragment ItemFragment on ProductVariant {
    id
    name
    price
    product {
      id
      name
      titleImage
    }
    file
    fileTypes
  }
`;

export const CartFragment = gql`
  fragment CartFragment on Cart {
    numItems
    totalAmount
    items {
      ...ItemFragment
    }
    seller {
      ...UserBlurbFragment
    }
  }
  ${ItemFragment}
  ${UserBlurbFragment}
`;
