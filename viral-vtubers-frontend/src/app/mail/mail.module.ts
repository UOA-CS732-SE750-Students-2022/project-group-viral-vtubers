import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewMailComponent } from './new-mail/new-mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { MailComponent } from './mail.component';

export const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: 'new',
        component: NewMailComponent,
      },
      {
        path: 'sent',
        component: SentMailComponent,
      },
      {
        path: '',
        component: InboxComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    NewMailComponent,
    InboxComponent,
    SentMailComponent,
    MailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MailModule {}
