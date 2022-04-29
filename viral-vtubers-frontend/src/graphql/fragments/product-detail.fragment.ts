import { gql } from 'apollo-angular';

export const ProductDetailFragment = gql`
  fragment ProductDetailFragment on Product {
    id
    name
    numLikes
    shortDescription
    titleImage
    images
    subcategory {
      id
      name
      category {
        id
        name
      }
    }
    artist {
      id
      displayName
      profileImageURI
      isFollowing
    }
  }
`;
