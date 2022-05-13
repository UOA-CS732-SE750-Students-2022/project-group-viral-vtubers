import { gql } from 'apollo-angular';

import { MailOutboxFragment } from '../fragments/mail.fragment';

export const sendMailMutation = gql`
  mutation SendMail($input: SendMailInput!) {
    sendMail(input: $input) {
      ...MailOutboxFragment
    }
  }
  ${MailOutboxFragment}
`;
