import { gql } from 'apollo-angular';

export const CartsFragment = gql`
  fragment CartsFragment on Carts {
    carts {
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
        titleImage
      }
    }
  }
`;
