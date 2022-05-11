import { Injectable } from '@angular/core';
import { ThumbnailsMode } from 'ng-gallery';
import { map, Observable } from 'rxjs';
import {
  EditSelfGQL,
  EditSelfInput,
  FollowGQL,
  LoginGQL,
  ProductBlurbFragmentFragment,
  SelfGQL,
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

  constructor(
    private userProfileGQL: UserProfileGQL,
    private selfGQL: SelfGQL,
    private editSelfGQL: EditSelfGQL,
    private loginGQL: LoginGQL,
    private followGQL: FollowGQL,
    private userLikedProductGQL: UserLikedProductGQL
  ) {}

  getSelf() {
    this.self$ = this.selfGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self));
    return { query: this.selfGQL, self$: this.self$ };
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

  editSelf(input: EditSelfInput) {
    return this.editSelfGQL.mutate({ input });
  }

  login() {
    return this.loginGQL.mutate();
  }

  follow(userId: string, follow: boolean) {
    return this.followGQL.mutate({ id: userId, follow });
  }
}
