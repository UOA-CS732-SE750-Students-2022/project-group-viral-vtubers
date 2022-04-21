import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VrmViewerComponent } from './shared/vrm-viewer/vrm-viewer.component';

const routes: Routes = [
  {
    path: 'vrm-viewer',
    component: VrmViewerComponent,
  },
  {
    path: 'commissions',
    loadChildren: () => import('./commissions/commissions.module').then(m => m.CommissionsModule),
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule),
  },
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then(m => m.MeModule),
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then(m => m.MailModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
