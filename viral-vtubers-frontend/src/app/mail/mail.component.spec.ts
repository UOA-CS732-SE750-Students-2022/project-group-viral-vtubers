import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MailComponent } from './mail.component';

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;
  let router: Router;

  beforeEach(async () => {
    router = {
      url: 'foo.bar',
      events: {
        subscribe: () => {},
      },
    } as Router;
    await TestBed.configureTestingModule({
      declarations: [MailComponent],
      providers: [{ provide: Router, useValue: router }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch to /mail', () => {
    // Check if it's initially inactive
    expect(
      fixture.nativeElement.querySelector('*[data-test-id="route-mail-button"]')
        .className
    ).not.toContain('active');

    component.activeRoute = '/mail';
    fixture.detectChanges();

    // Check if it's now active
    expect(
      fixture.nativeElement.querySelector('*[data-test-id="route-mail-button"]')
        .className
    ).toContain('active');
  });

  it('should switch to /mail/sent', () => {
    // Check if it's initially inactive
    expect(
      fixture.nativeElement.querySelector(
        '*[data-test-id="route-mail-sent-button"]'
      ).className
    ).not.toContain('active');

    component.activeRoute = '/mail/sent';
    fixture.detectChanges();

    // Check if it's now active
    expect(
      fixture.nativeElement.querySelector(
        '*[data-test-id="route-mail-sent-button"]'
      ).className
    ).toContain('active');
  });
});
