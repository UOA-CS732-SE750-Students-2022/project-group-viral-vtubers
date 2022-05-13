import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  InboxGQL,
  MailInboxFragmentFragment,
  MailOutboxFragmentFragment,
  OutboxGQL,
  SendMailGQL,
  SendMailInput,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  inbox$?: Observable<MailInboxFragmentFragment[]>;
  outbox$?: Observable<MailOutboxFragmentFragment[]>;

  constructor(
    private inboxGQL: InboxGQL,
    private outboxGQL: OutboxGQL,
    private sendMailGQL: SendMailGQL
  ) {}

  getInbox() {
    this.inbox$ = this.inboxGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self.inbox));
    return { query: this.inboxGQL, inbox$: this.inbox$ };
  }

  getOutbox() {
    this.outbox$ = this.outboxGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self.sent));
    return { query: this.outboxGQL, outbox$: this.outbox$ };
  }

  sendMail(input: SendMailInput) {
    return this.sendMailGQL.mutate({ input });
  }
}
