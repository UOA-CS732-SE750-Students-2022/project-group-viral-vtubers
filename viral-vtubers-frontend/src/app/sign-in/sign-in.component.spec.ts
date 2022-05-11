import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../shared/auth/auth.service';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let authService: AuthService;
  let signInEmail: string;
  let signInPassword: string;

  beforeEach(async () => {
    authService = {
      SignIn: async (email, password) => {
        signInEmail = email;
        signInPassword = password;
      },
    } as AuthService;

    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
