import { gql } from 'apollo-angular';

import { SubcategoryFragment } from './category.fragment';
import { TagFragment } from './tag.fragment';
import { UserFragment } from './user.fragment';

export const OrderFragment = gql`
  fragment OrderFragment on Order {
    bounty
    description
    id
    subcategory {
      ...SubcategoryFragment
    }
    image
    isDraft
    name
    owner {
      ...UserFragment
    }
    artist {
      ...UserFragment
    }
    tags {
      ...TagFragment
    }
    applications {
      ...UserFragment
    }
  }
  ${UserFragment}
  ${TagFragment}
  ${SubcategoryFragment}
`;

export const MyOrdersFragment = gql`
  fragment MyOrdersFragment on MyOrder {
    active {
      ...OrderFragment
    }
    past {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;

export const MyCommissionsFragment = gql`
  fragment MyCommissionsFragment on MyCommission {
    lost {
      ...OrderFragment
    }
    pending {
      ...OrderFragment
    }
    won {
      ...OrderFragment
    }
  }
  ${OrderFragment}
`;
