import { gql } from 'apollo-angular';

import { TagFragment } from '../fragments/tag.fragment';

export const tagsQuery = gql`
  query Tags {
    tags {
      ...TagFragment
    }
  }
  ${TagFragment}
`;
