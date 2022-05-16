import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { map, Observable } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';
import { MailInboxFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  mails$: Observable<MailInboxFragmentFragment[]>;

  deleted: string[] = [];

  constructor(private mailService: MailService) {
    this.mails$ = mailService
      .getInbox()
      .inbox$.pipe(
        map((mails) =>
          mails
            .map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }))
            .filter((mail) => !this.deleted.includes(mail.id))
        )
      );

    const del = localStorage.getItem('deletedMail');
    if (del === null) {
      return;
    }
    this.deleted = JSON.parse(del);
  }

  markAsRead(id: string) {
    this.mailService.editMail({ id, isRead: true }).subscribe();
  }
  markAsUnread(id: string) {
    this.mailService.editMail({ id, isRead: false }).subscribe();
  }

  delete(id: string) {
    this.deleted.push(id);
    localStorage.setItem('deletedMail', JSON.stringify(this.deleted));
    this.mailService.editMail({ id, isRead: true }).subscribe();
    this.mails$ = this.mailService
      .getInbox()
      .inbox$.pipe(
        map((mails) =>
          mails
            .map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }))
            .filter((mail) => !this.deleted.includes(mail.id))
        )
      );
  }

  ngOnInit(): void {}
}
