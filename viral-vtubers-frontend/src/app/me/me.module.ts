import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { LikesComponent } from './likes/likes.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { FollowingComponent } from './following/following.component';
import { CreatorContractsComponent } from './creator-contracts/creator-contracts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManageUploadsComponent } from './manage-uploads/manage-uploads.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'likes',
    component: LikesComponent,
  },
  {
    path: 'orders',
    component: CommissionRequestsComponent,
  },
  {
    path: 'uploads',
    component: ManageUploadsComponent,
  },
  {
    path: 'following',
    component: FollowingComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'creator/contracts',
    component: CreatorContractsComponent,
  },
];

@NgModule({
  declarations: [
    AccountComponent,
    LikesComponent,
    CommissionRequestsComponent,
    FollowingComponent,
    CreatorContractsComponent,
    EditProfileComponent,
    ManageUploadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MeModule { }
