import { gql } from 'apollo-angular';

import {
  ProductBlurbFragment,
  ProductDetailFragment,
} from '../fragments/product.fragment';

export const likeProductMutation = gql`
  mutation LikeProduct($id: ID!, $like: Boolean!) {
    likeProduct(id: $id, like: $like) {
      ...ProductBlurbFragment
    }
  }
  ${ProductBlurbFragment}
`;

export const addProductMutation = gql`
  mutation AddProduct($input: AddProductInput!) {
    addProduct(input: $input) {
      ...ProductDetailFragment
    }
  }
  ${ProductDetailFragment}
`;

export const editProductMutation = gql`
  mutation EditProduct($input: EditProductInput!) {
    editProduct(input: $input) {
      ...ProductDetailFragment
    }
  }
  ${ProductDetailFragment}
`;

export const addProductVariantMutation = gql`
  mutation AddProductVariant($input: AddProductVariant!) {
    addProductVariant(input: $input) {
      ...ProductDetailFragment
    }
  }
  ${ProductDetailFragment}
`;

export const editProductVariantMutation = gql`
  mutation EditProductVariant($input: EditProductVariant!) {
    editProductVariant(input: $input) {
      ...ProductDetailFragment
    }
  }
  ${ProductDetailFragment}
`;
