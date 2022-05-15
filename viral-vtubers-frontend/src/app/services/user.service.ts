import { Injectable } from '@angular/core';
import { ThumbnailsMode } from 'ng-gallery';
import { map, Observable } from 'rxjs';
import {
  AccountGQL,
  AddServiceGQL,
  AddServiceInput,
  ArtistFragmentFragment,
  ArtistPaginationFragmentFragment,
  ArtistsGQL,
  DeleteServiceGQL,
  EditSelfGQL,
  EditSelfInput,
  EditServiceGQL,
  EditServiceInput,
  FollowGQL,
  LoginGQL,
  MyUploadedProductsGQL,
  NotificationFragmentFragment,
  NotificationGQL,
  ProductBlurbFragmentFragment,
  SelfGQL,
  UserAccountFragmentFragment,
  UserByNameGQL,
  UserFragmentFragment,
  UserLikedProductGQL,
  UserProfileFragmentFragment,
  UserProfileGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  self$?: Observable<UserFragmentFragment>;
  userProfile$?: Observable<UserProfileFragmentFragment>;

  likedProducts$?: Observable<ProductBlurbFragmentFragment[]>;

  artists$?: Observable<ArtistPaginationFragmentFragment>;
  userByName$?: Observable<UserFragmentFragment>;

  account$?: Observable<UserAccountFragmentFragment>;

  uploadedProducts$?: Observable<ProductBlurbFragmentFragment[]>;

  notification$?: Observable<NotificationFragmentFragment>;

  constructor(
    private userProfileGQL: UserProfileGQL,
    private selfGQL: SelfGQL,
    private editSelfGQL: EditSelfGQL,
    private loginGQL: LoginGQL,
    private followGQL: FollowGQL,
    private userLikedProductGQL: UserLikedProductGQL,
    private artistsGQL: ArtistsGQL,
    private userByNameGQL: UserByNameGQL,
    private accountGQL: AccountGQL,
    private myUploadsGQL: MyUploadedProductsGQL,
    private addServiceGQL: AddServiceGQL,
    private editServiceGQL: EditServiceGQL,
    private deleteServiceGQL: DeleteServiceGQL,
    private notificationGQL: NotificationGQL
  ) {}

  getSelf() {
    if (!this.self$) {
      this.self$ = this.selfGQL
        .watch()
        .valueChanges.pipe(map((res) => res.data.self));
    }

    return { query: this.selfGQL, self$: this.self$ };
  }

  getNotification() {
    this.notification$ = this.notificationGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.notification));
    return { query: this.notificationGQL, notification$: this.notification$ };
  }

  getUserProfile(userId: string) {
    this.userProfile$ = this.userProfileGQL
      .watch({ id: userId })
      .valueChanges.pipe(map((res) => res.data.user));

    return { query: this.userProfileGQL, userProfile$: this.userProfile$ };
  }

  getUserLikedProjects(userId: string) {
    this.likedProducts$ = this.userLikedProductGQL
      .watch({ id: userId })
      .valueChanges.pipe(map((res) => res.data.user.likedProduct));

    return {
      query: this.userLikedProductGQL,
      likedProducts$: this.likedProducts$,
    };
  }

  getArtists() {
    this.artists$ = this.artistsGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.users));
    return { query: this.artistsGQL, artists$: this.artists$ };
  }

  getUserByName(name: string) {
    this.userByName$ = this.userByNameGQL
      .watch({ name })
      .valueChanges.pipe(map((res) => res.data.userByName));
    return { query: this.userByNameGQL, userByName$: this.userByName$ };
  }

  getAccount() {
    this.account$ = this.accountGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self));
    return { query: this.accountGQL, account$: this.account$ };
  }

  getMyUploadedProducts() {
    this.uploadedProducts$ = this.myUploadsGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self.products));

    return {
      query: this.myUploadsGQL,
      uploadedProducts$: this.uploadedProducts$,
    };
  }

  editSelf(input: EditSelfInput) {
    return this.editSelfGQL.mutate({ input });
  }

  login() {
    return this.loginGQL.mutate();
  }

  follow(userId: string, follow: boolean) {
    return this.followGQL.mutate({ id: userId, follow });
  }

  addService(input: AddServiceInput) {
    return this.addServiceGQL.mutate({ input });
  }

  editService(input: EditServiceInput) {
    return this.editServiceGQL.mutate({ input });
  }

  deleteService(id: string) {
    return this.deleteServiceGQL.mutate({ id });
  }
}
