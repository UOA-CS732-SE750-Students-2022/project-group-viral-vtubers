import { ComponentFixture, TestBed } from '@angular/core/testing';
import firebase from 'firebase/compat';

import { AuthService } from '../shared/auth/auth.service';
import { mockAuthService } from '../shared/auth/auth.service.mock';
import { VerifyEmailComponent } from './verify-email.component';
import User = firebase.User;

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;
  let authService: AuthService;
  let mailSent: boolean;

  beforeEach(async () => {
    mailSent = false;
    const authServiceMock = mockAuthService({
      email: 'foo@bar',
      sendVerificationMail: async () => {
        mailSent = true;
      },
    });
    authService = authServiceMock.useValue;
    await TestBed.configureTestingModule({
      declarations: [VerifyEmailComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set email', () => {
    const EMAIL = 'hjay473@aucklanduni.ac.nz';
    authService.userData = { email: EMAIL } as User;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('div div p strong').textContent
    ).toContain(EMAIL);
    expect(component).toBeTruthy();
  });

  it('should send a verification email', () => {
    expect(mailSent).toBe(false);

    const button = fixture.nativeElement.querySelector('input[type="button"]');
    button.click();

    expect(mailSent).toBe(true);
  });
});
