import { from } from 'rxjs';

import { MailService } from './mail.service';

export const mockMailService = (props: MailServiceProps) => ({
  getOutbox: () => ({
    outbox$: from([{}]),
  }),
  getInbox: () => ({
    inbox$: from([{}]),
  })
});

export const mockMailServiceProvider = (props: MailServiceProps) => ({
  provide: MailService,
  useValue: mockMailService(props),
});

export interface MailServiceProps {
  placeholder?: null;
}
