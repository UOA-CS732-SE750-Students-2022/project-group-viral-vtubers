import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MeComponent } from './me.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'orders',
    component: CommissionRequestsComponent,
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
];

@NgModule({
  declarations: [
    AccountComponent,
    CommissionRequestsComponent,
    FavouritesComponent,
    MeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MeModule {}
