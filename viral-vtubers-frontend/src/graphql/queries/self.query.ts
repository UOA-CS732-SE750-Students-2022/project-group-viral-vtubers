import { gql } from 'apollo-angular';

import { NotificationFragment } from '../fragments/notification.fragment';
import { UserAccountFragment, UserFragment } from '../fragments/user.fragment';

export const selfQuery = gql`
  query Self {
    self {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const accountQuery = gql`
  query Account {
    self {
      ...UserAccountFragment
    }
  }
  ${UserAccountFragment}
`;

export const notificationQuery = gql`
query Notification {
  notification {
    ...NotificationFragment
  }
  ${NotificationFragment}
}`;
