import { Component, OnInit } from '@angular/core';
import { Mail, MailInboxFragmentFragment, User } from 'src/schema/type';
import * as moment from 'moment';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  mails: MailInboxFragmentFragment[];

  constructor() {
    this.mails = [
      {
        body: 'Im probably a year late but still want to ask, what was your independent variable for your physics IA Im also doing mine on rotational kinetic energy down a slop and want to make sure im not doing something some else has done before \nMany thanks!',
        date: '2020-06-01T00:00:00.000Z',
        id: 'mail0',
        read: false,
        title: 'Physics IA questions',
        sender: {
          displayName: 'Viral Vtubers',
          id: 'user0',
        },
      },
      {
        body: "Hey, I was going through the IBO subreddit and I saw that your Physics IA was about rotational kinetic energy on a ramp and I'm working on something similar. I was just wondering if you could send me your IA to use as an exemplar since you got a 22. Any help would be appreciated, thanks",
        date: '2020-06-01T00:00:00.000Z',
        id: 'mail1',
        read: true,
        title: 'Physics IA:',
        sender: {
          displayName: 'Viral Vtubers',
          id: 'user0',
        },
      },
      {
        body: 'Hello! You are receiving this message because you have followed a user profile in the past.\nStarting on 08/19/2019, we will begin showing some users new followers of their profile. In about 3 months, all users will be able to see all the usernames of their followers, including follows that were done in the past, while the user profile feature was in beta. Please take a moment to check your subscriptions list (where followed users also appear) to ensure that if you follow someone, you are comfortable with them being aware of this.',
        date: '2019-06-01T00:00:00.000Z',
        id: 'mail2',
        read: true,
        title: 'User Profile Transparency Update:',
        sender: {
          displayName: 'Viral Vtubers',
          id: 'user0',
        },
      },
      {
        body: "Hey, I was going through the IBO subreddit and I saw that your Physics IA was about rotational kinetic energy on a ramp and I'm working on something similar. I was just wondering if you could send me your IA to use as an exemplar since you got a 22. Any help would be appreciated, thanks",
        date: '2020-06-01T00:00:00.000Z',
        id: 'mail3',
        read: true,
        title: 'Physics IA:',
        sender: {
          displayName: 'Viral Vtubers',
          id: 'user0',
        },
      },
      {
        body: 'Hello! You are receiving this message because you have followed a user profile in the past.\nStarting on 08/19/2019, we will begin showing some users new followers of their profile. In about 3 months, all users will be able to see all the usernames of their followers, including follows that were done in the past, while the user profile feature was in beta. Please take a moment to check your subscriptions list (where followed users also appear) to ensure that if you follow someone, you are comfortable with them being aware of this.',
        date: '2019-06-01T00:00:00.000Z',
        id: 'mail4',
        read: true,
        title: 'User Profile Transparency Update:',
        sender: {
          displayName: 'Viral Vtubers',
          id: 'user0',
        },
      },
    ].map((mail) => ({ ...mail, date: moment(mail.date).fromNow() }));
  }

  ngOnInit(): void {}
}
