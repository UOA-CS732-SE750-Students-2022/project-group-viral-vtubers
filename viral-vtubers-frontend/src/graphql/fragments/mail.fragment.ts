import { gql } from 'apollo-angular';

export const MailInboxFragment = gql`
  fragment MailInboxFragment on Mail {
    body
    date
    id
    isRead
    title
    sender {
      id
      displayName
    }
  }
`;

export const MailOutboxFragment = gql`
  fragment MailOutboxFragment on Mail {
    body
    date
    id
    title
    receiver {
      id
      displayName
    }
  }
`;
