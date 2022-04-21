import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LikesComponent } from './likes/likes.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { FollowingComponent } from './following/following.component';
import { CreatorContractsComponent } from './creator-contracts/creator-contracts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'account',
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
    EditProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeModule { }
