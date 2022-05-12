import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MeComponent } from './me.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

export const routes: Routes = [
  {
    path: '',
    component: MeComponent,
    children: [
      {
        path: '',
        component: AccountComponent,
      },
      {
        path: 'purchases',
        component: PurchaseHistoryComponent,
      },
      {
        path: 'orders',
        component: CommissionRequestsComponent,
      },
      {
        path: 'favourites',
        component: FavouritesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AccountComponent,
    CommissionRequestsComponent,
    FavouritesComponent,
    MeComponent,
    PurchaseHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MeModule {}
