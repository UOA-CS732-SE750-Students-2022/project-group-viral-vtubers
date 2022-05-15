import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { notificationQuery } from 'src/graphql/queries/self.query';
import {
  EditMailGQL,
  EditMailInput,
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
    private sendMailGQL: SendMailGQL,
    private editMailGQL: EditMailGQL
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
    return this.sendMailGQL.mutate(
      { input },
      {
        refetchQueries: [{ query: notificationQuery }],
      }
    );
  }

  editMail(input: EditMailInput) {
    return this.editMailGQL.mutate(
      { input },
      {
        refetchQueries: [{ query: notificationQuery }],
      }
    );
  }
}
