import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/schema/type';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  mails: Mail[];

  constructor() {
    this.mails = [
      {
        body: 'Im probably a year late but still want to ask, what was your independent variable for your physics IA Im also doing mine on rotational kinetic energy down a slop and want to make sure im not doing something some else has done before \nMany thanks!',
        date: '2020-06-01T00:00:00.000Z',
        id: 'fdjsio12',
        read: false,
        title: 'Physics IA questions',
      },
      {
        body: "Hey, I was going through the IBO subreddit and I saw that your Physics IA was about rotational kinetic energy on a ramp and I'm working on something similar. I was just wondering if you could send me your IA to use as an exemplar since you got a 22. Any help would be appreciated, thanks",
        date: '2020-06-01T00:00:00.000Z',
        id: 'afdjsidsao12',
        read: false,
        title: 'Physics IA:',
      },
    ];
  }

  ngOnInit(): void {}
}
