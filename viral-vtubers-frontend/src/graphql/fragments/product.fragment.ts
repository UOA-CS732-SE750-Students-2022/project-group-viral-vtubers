import { gql } from 'apollo-angular';

import { TagFragment } from './tag.fragment';

export const ProductDetailFragment = gql`
  fragment ProductDetailFragment on Product {
    id
    name
    numLikes
    description
    titleImage
    images
    tags {
      ...TagFragment
    }
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
    variants {
      id
      fileTypes
      file
      name
      price
    }
  }

  ${TagFragment}
`;

export const ProductBlurbFragment = gql`
  fragment ProductBlurbFragment on Product {
    id
    name
    numLikes
    titleImage
    minPrice
  }
`;

export const ProductPaginationFragment = gql`
  fragment ProductPaginationFragment on ProductPagination {
    edges {
      cursor
      node {
        ...ProductBlurbFragment
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      startCursor
    }
  }

  ${ProductBlurbFragment}
`;
