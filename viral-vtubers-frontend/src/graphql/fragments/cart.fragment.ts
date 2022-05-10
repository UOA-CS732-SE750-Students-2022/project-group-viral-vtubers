import { gql } from 'apollo-angular';

export const CartFragment = gql`
  fragment CartFragment on Cart {
    numItems
    totalAmount
    seller {
      id
      displayName
      profileImageURI
    }
    items {
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
  }
`;
