import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VrmViewerComponent } from './shared/vrm-viewer/vrm-viewer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule),
  },
  // Plain page components
  {
    path: 'user/:id',
    component: UserProfileComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'feed',
    component: ActivityFeedComponent,
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
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
