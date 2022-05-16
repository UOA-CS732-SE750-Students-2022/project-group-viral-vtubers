import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DisqusModule } from 'ngx-disqus';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { CreateRequestComponent } from './create-request/create-request.component';
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
        path: 'orders/new',
        component: CreateRequestComponent,
      },
      {
        path: 'orders/edit/:orderId',
        component: CreateRequestComponent,
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
    CreateRequestComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot(),
    DisqusModule,
  ],
})
export class MeModule {}
