import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './shared/auth/auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CartComponent,
    ActivityFeedComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
