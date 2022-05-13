import { gql } from 'apollo-angular';

export const NotificationFragment = gql`
  fragment NotificationFragment on Notification {
    numMail
    numCart
  }
`;
