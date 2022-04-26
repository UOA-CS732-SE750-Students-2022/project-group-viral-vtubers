import { TestBed } from '@angular/core/testing';
import { MeModule, routes } from './me.module';

import { AccountComponent } from './account/account.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FollowingComponent } from './following/following.component';
import { LikesComponent } from './likes/likes.component';
import { ManageUploadsComponent } from './manage-uploads/manage-uploads.component';
import { CreatorContractsComponent } from './creator-contracts/creator-contracts.component';

describe('MeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MeModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(MeModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /', () => {
    const expectedRoute = { path: '', component: AccountComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /orders', () => {
    const expectedRoute = { path: 'orders', component: CommissionRequestsComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /edit-profile', () => {
    const expectedRoute = { path: 'edit-profile', component: EditProfileComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /following', () => {
    const expectedRoute = { path: 'following', component: FollowingComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /likes', () => {
    const expectedRoute = { path: 'likes', component: LikesComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /uploads', () => {
    const expectedRoute = { path: 'uploads', component: ManageUploadsComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /creator/contracts', () => {
    const expectedRoute = { path: 'creator/contracts', component: CreatorContractsComponent };
    expect(routes).toContain(expectedRoute);
  });
});
