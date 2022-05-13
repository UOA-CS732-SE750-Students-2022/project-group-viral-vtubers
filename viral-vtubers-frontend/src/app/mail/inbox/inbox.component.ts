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

  constructor(private mailService: MailService) {
    this.mails$ = mailService
      .getInbox()
      .inbox$.pipe(
        map((mails) =>
          mails.map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }))
        )
      );
  }

  ngOnInit(): void {}
}
