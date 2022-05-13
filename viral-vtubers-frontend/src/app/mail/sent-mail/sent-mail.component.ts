import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { map, Observable } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';
import { MailOutboxFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.scss'],
})
export class SentMailComponent implements OnInit {
  mails$: Observable<MailOutboxFragmentFragment[]>;

  constructor(private mailService: MailService) {
    this.mails$ = mailService
      .getOutbox()
      .outbox$.pipe(
        map((mails) =>
          mails.map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }))
        )
      );
  }

  ngOnInit(): void {}
}
