import { gql } from 'apollo-angular';

import { TagFragment } from './tag.fragment';

export const ProductDetailVariantFragment = gql`
  fragment ProductDetailVariantFragment on ProductVariant {
    id
    fileTypes
    fileName
    file
    name
    price
  }
`;

export const ProductDetailFragment = gql`
  fragment ProductDetailFragment on Product {
    id
    name
    isComment
    isDraft
    isLiked
    numLikes
    description
    titleImage
    vrm
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
      ...ProductDetailVariantFragment
      isPurchased
      isCart
    }
  }

  ${TagFragment}
  ${ProductDetailVariantFragment}
`;

export const ProductBlurbFragment = gql`
  fragment ProductBlurbFragment on Product {
    id
    name
    isLiked
    isDraft
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
