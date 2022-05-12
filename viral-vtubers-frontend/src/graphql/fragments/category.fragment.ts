import { gql } from 'apollo-angular';

export const CategoryFragment = gql`
  fragment CategoryFragment on Category {
    id
    name
    subcategories {
      id
      name
    }
  }
`;

export const SubcategoryFragment = gql`
  fragment SubcategoryFragment on Subcategory {
    id
    name
    category {
      id
      name
    }
  }
`;
