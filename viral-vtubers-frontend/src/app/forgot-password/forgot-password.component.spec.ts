import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../shared/auth/auth.service';
import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let authService: AuthService;
  let resetEmail: string;

  beforeEach(async () => {
    authService = {
      ForgotPassword: async (passwordResetEmail: string) => {
        resetEmail = passwordResetEmail;
      },
    } as unknown as AuthService;

    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
