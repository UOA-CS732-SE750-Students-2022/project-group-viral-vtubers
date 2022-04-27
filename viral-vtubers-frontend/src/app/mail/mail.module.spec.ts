import { TestBed } from '@angular/core/testing';

import { InboxComponent } from './inbox/inbox.component';
import { MailModule, routes } from './mail.module';
import { NewMailComponent } from './new-mail/new-mail.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

describe('MailModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MailModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(MailModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /', () => {
    const expectedRoute = { path: '', component: InboxComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /sent', () => {
    const expectedRoute = { path: 'sent', component: SentMailComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /new', () => {
    const expectedRoute = { path: 'new', component: NewMailComponent };
    expect(routes).toContain(expectedRoute);
  });
});
