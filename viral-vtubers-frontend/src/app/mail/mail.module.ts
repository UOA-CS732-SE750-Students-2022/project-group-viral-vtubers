import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewMailComponent } from './new-mail/new-mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewMailComponent,
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'sent',
    component: SentMailComponent,
  }
];

@NgModule({
  declarations: [
    NewMailComponent,
    InboxComponent,
    SentMailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MailModule { }
