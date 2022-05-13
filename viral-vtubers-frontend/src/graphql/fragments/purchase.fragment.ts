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

export const ItemDescriptionFragment = gql`
  fragment ItemDescriptionFragment on ProductVariant {
    id
    name
    price
    product {
      id
      name
      titleImage
      description
    }
    file
    fileName
    fileTypes
  }
`;

export const SaleFragment = gql`
  fragment SaleFragment on Purchase {
    id
    placed
    buyer {
      ...UserBlurbFragment
    }
    items {
      ...ItemDescriptionFragment
    }
  }
  ${ItemFragment}
  ${ItemDescriptionFragment}
`;
