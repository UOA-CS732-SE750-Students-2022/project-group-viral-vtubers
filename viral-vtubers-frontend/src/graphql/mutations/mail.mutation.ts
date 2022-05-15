import { gql } from 'apollo-angular';

import {
  MailInboxFragment,
  MailOutboxFragment,
} from '../fragments/mail.fragment';

export const sendMailMutation = gql`
  mutation SendMail($input: SendMailInput!) {
    sendMail(input: $input) {
      ...MailOutboxFragment
    }
  }
  ${MailOutboxFragment}
`;

export const editMailMutation = gql`
  mutation EditMail($input: EditMailInput!) {
    editMail(input: $input) {
      ...MailInboxFragment
    }
  }
  ${MailInboxFragment}
`;
