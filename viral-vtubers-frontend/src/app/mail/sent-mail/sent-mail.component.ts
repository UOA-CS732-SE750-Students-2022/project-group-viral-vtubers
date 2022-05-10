import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MailOutboxFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.scss'],
})
export class SentMailComponent implements OnInit {
  mails: MailOutboxFragmentFragment[];

  constructor() {
    this.mails = [
      {
        body: "oh DUDE hahaah I just saw this hahah I'm so sorry, 2 years late. I stopped using this account for like 3 years and just logged back on. Sorry couldn't help you!! Would've loved to sent you my IA if it could've helped you. But do want to reach and out and say, hope you did good and survived your IB journey in the end!!!!",
        date: '2022-02-01T00:00:00.000Z',
        id: 'mail0',
        title: 're: Physics IA',
        receiver: {
          displayName: 'Shanhara_K',
          id: 'user0',
        },
      },
      {
        body: "Oh, awesome! I was debating between that blue set and the 虞美人三代13支化妆套刷 which seems to be popular but the blue set just looks so much nicer! I think I will get the 铃兰 set then. Thanks for the advice!\nAnd yeah lol I was so surprised. The illya event is killing me... I'm taking a break from it with AB and skincare",
        date: '2019-06-01T00:00:00.000Z',
        id: 'mail1',
        title: 're: Brushes',
        receiver: {
          displayName: 'chocolatechoux',
          id: 'user6',
        },
      },
      {
        body: 'Great! thanks a lot man',
        date: '2019-06-01T00:00:00.000Z',
        id: 'mail3',
        title: 're: heya',
        receiver: {
          displayName: 'deleted',
          id: 'user1',
        },
      },
      {
        body: "Hey man,\nI know it's been 4 months since you posted... but I was wondering if I could get my hands on those Sneaky pics?\nThanks!",
        date: '2018-06-01T00:00:00.000Z',
        id: 'mail4',
        title: 'Pictures',
        receiver: {
          displayName: 'pvtsnowman',
          id: 'user2',
        },
      },
    ].map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }));
  }

  ngOnInit(): void {}
}
