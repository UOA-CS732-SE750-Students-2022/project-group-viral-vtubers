import { gql } from 'apollo-angular';

import { CategoryFragment } from '../fragments/category.fragment';

export const categoriesQuery = gql`
  query Categories {
    categories {
      ...CategoryFragment
    }
  }
  ${CategoryFragment}
`;
