import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VrmCanvasComponent } from './shared/components/vrm-canvas/vrm-canvas.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: 'vrm',
    component: VrmCanvasComponent,
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
    canActivate: [AuthGuard],
  },
  {
    path: 'creator',
    loadChildren: () =>
      import('./creator-space/creator-space.module').then(
        (m) => m.CreatorSpaceModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule),
    canActivate: [AuthGuard],
  },
  // Plain page components
  {
    path: 'user/:id',
    component: UserProfileComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
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
    path: '',
    component: MainPageComponent,
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
