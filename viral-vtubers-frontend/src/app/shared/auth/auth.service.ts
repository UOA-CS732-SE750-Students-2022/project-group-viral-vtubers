import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData?: firebase.User;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private userService: UserService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', await user.getIdToken());
      } else {
        this.userData = undefined;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    });
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        if (!user) {
          window.alert('No user found');
          return;
        }
        this.ngZone.run(() => {
          this.router.navigate(['feed']);
        });
        await firstValueFrom(this.userService.login());
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email: string, password: string, displayName: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
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
      })
      .catch((error) => {
        window.alert(error.message);
      });
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
    const userData = localStorage.getItem('user');
    if (!userData) {
      return false;
    }

    const user = JSON.parse(userData);
    if (!user) {
      return false;
    }
    return true;
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.userData = undefined;
      this.router.navigate(['signin']);
    });
  }
}

type subcategoryType = {
  id: string;
  name: string;
};
