import { gql } from 'apollo-angular';

export const MailInboxFragment = gql`
  fragment MailInboxFragment on Mail {
    body
    date
    id
    read
    title
    sender {
      id
      displayName
    }
  }
`;
