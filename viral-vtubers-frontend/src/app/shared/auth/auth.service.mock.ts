import { AuthService } from './auth.service';

export function mockAuthService({
  email = 'foo@bar',
  signIn = async (email: string, password: string) => {},
  sendVerificationMail = async () => {},
} = {}) {
  return {
    provide: AuthService,
    useValue: {
      userData: {
        email,
      },
      SignIn: signIn,
      sendVerificationMail,
    } as unknown as AuthService,
  };
}
