import { gql } from 'apollo-angular';

import {
  CategoryFragment,
  SubcategoryFragment,
} from '../fragments/category.fragment';
import {
  ProductBlurbFragment,
  ProductDetailFragment,
  ProductPaginationFragment,
} from '../fragments/product.fragment';

export const myProductsQuery = gql`
  query MyProducts {
    self {
      products {
        ...ProductBlurbFragment
      }
    }
  }

  ${ProductBlurbFragment}
`;
export const categoryQuery = gql`
  query Category($id: ID!) {
    category(id: $id) {
      ...CategoryFragment
    }
  }

  ${CategoryFragment}
`;

export const categoriesQuery = gql`
  query Categories {
    categories {
      ...CategoryFragment
    }
  }
  ${CategoryFragment}
`;

export const subcategoryQuery = gql`
  query Subcategory($id: ID!) {
    subcategory(id: $id) {
      ...SubcategoryFragment
    }
  }
  ${SubcategoryFragment}
`;

export const productsQuery = gql`
  query Products(
    $filter: ProductFilter
    $sort: ProductSort
    $cursor: String
    $limit: Int
  ) {
    products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
      ...ProductPaginationFragment
    }
  }
  ${ProductPaginationFragment}
`;

export const productsCategoryQuery = gql`
  query ProductsCategory(
    $categoryId: ID!
    $filter: ProductFilter
    $sort: ProductSort
    $cursor: String
    $limit: Int
  ) {
    category(id: $categoryId) {
      products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
        ...ProductPaginationFragment
      }
    }
  }
  ${ProductPaginationFragment}
`;

export const productsSubategoryQuery = gql`
  query ProductsSubategoryQuery(
    $subcategoryId: ID!
    $filter: ProductFilter
    $sort: ProductSort
    $cursor: String
    $limit: Int
  ) {
    subcategory(id: $subcategoryId) {
      products(filter: $filter, sort: $sort, cursor: $cursor, limit: $limit) {
        ...ProductPaginationFragment
      }
    }
  }
  ${ProductPaginationFragment}
`;

export const productQuery = gql`
  query Product($id: ID!) {
    product(id: $id) {
      ...ProductDetailFragment
    }
  }
  ${ProductDetailFragment}
`;
