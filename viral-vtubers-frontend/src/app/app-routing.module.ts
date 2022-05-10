import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { VrmViewerComponent } from './shared/vrm-viewer/vrm-viewer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

export const routes: Routes = [
  {
    path: 'vrm-viewer',
    component: VrmViewerComponent,
  },
  // Modules: Each has nested routes, and is lazy loaded.
  {
    path: 'commissions',
    loadChildren: () =>
      import('./commissions/commissions.module').then(
        (m) => m.CommissionsModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then((m) => m.MeModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'creator',
    loadChildren: () =>
      import('./creator-space/creator-space.module').then(
        (m) => m.CreatorSpaceModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule),
    // canActivate: [AuthGuard],
  },
  // Plain page components
  {
    path: 'user/:id',
    component: UserProfileComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'feed',
    component: ActivityFeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
