import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../shared/auth/auth.service';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let authService: AuthService;
  let signUpEmail: string;
  let signUpPassword: string;
  let signUpName: string;

  beforeEach(async () => {
    authService = {
      SignUp: async (email, password, name) => {
        signUpEmail = email;
        signUpPassword = password;
        signUpName = name;
      },
    } as AuthService;
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
