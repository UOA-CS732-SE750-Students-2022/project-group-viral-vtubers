import { gql } from 'apollo-angular';

import {
  MailInboxFragment,
  MailOutboxFragment,
} from '../fragments/mail.fragment';

export const inboxQuery = gql`
  query Inbox {
    self {
      inbox {
        ...MailInboxFragment
      }
    }
  }
  ${MailInboxFragment}
`;

export const outboxQuery = gql`
  query Outbox {
    self {
      sent {
        ...MailOutboxFragment
      }
    }
  }
  ${MailOutboxFragment}
`;
