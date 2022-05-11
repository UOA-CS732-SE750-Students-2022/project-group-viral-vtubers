import { gql } from 'apollo-angular';

import { ProductBlurbFragment } from '../fragments/product.fragment';

export const likeProductMutation = gql`
  mutation LikeProduct($id: ID!, $like: Boolean!) {
    likeProduct(id: $id, like: $like) {
      ...ProductBlurbFragment
    }
  }
  ${ProductBlurbFragment}
`;
