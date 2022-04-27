import { gql } from 'apollo-angular';

import { MailInboxFragment } from '../fragments/mail.fragment';

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
