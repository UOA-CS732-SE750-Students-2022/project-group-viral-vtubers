import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { firstValueFrom, Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User | null>;
  private userData: firebase.User | null = (() => {
    const data = localStorage.getItem('user');
    if (data) return JSON.parse(data) as firebase.User;
    return null;
  })();

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private userService: UserService
  ) {
    this.user = afAuth.authState;

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('token', await user.getIdToken());
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.userData = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    });
  }

  getUserData(): firebase.User | null {
    return this.userData;
  }

  getUser(): Observable<firebase.User | null> {
    return this.user;
  }

  async getToken(): Promise<string> {
    const user = await this.afAuth.currentUser;

    if (!user) {
      return localStorage.getItem('token') ?? '';
    }

    return user.getIdToken();
  }

  // Sign in with email/password
  async signIn(email: string, password: string) {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      if (!user) {
        window.alert('No user found');
        return;
      }
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
      await firstValueFrom(this.userService.login());
    } catch (error: any) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async signUp(email: string, password: string, displayName: string) {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!user) {
        window.alert('No user found');
        return;
      }
      // send Verification Mail, update profile with displayName, and set userData
      this.sendVerificationMail();
      await user.updateProfile({
        displayName: displayName,
      });
      await firstValueFrom(this.userService.login());
    } catch (error: any) {
      window.alert(error.message);
    }
  }

  // Send email verification when new user signs up
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: firebase.User | null) => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Reset Forgotten password
  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    if (!this.userData) {
      return false;
    }
    return true;
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      this.userData = null;
      this.router.navigate(['signin']);
    });
  }
}
