import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../shared/auth/auth.service';
import { VerifyEmailComponent } from './verify-email.component';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;
  let authService: AuthService;
  let mailSent: boolean;

  beforeEach(async () => {
    authService = {
      userData: {
        user: {
          email: 'foo@bar',
        },
      },
      SendVerificationMail: async () => {
        mailSent = true;
      },
    } as AuthService;
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
    authService.userData.email = EMAIL;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('div div p strong').textContent
    ).toContain(EMAIL);
    expect(component).toBeTruthy();
  });

  it('should send a verification email', () => {
    const button = fixture.nativeElement.querySelector('input[type="button"]');
    button.click();
    expect(mailSent).toBe(true);
  });
});
