import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  EditSelfGQL,
  EditSelfInput,
  LoginGQL,
  SelfGQL,
  UserFragmentFragment,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  self$: Observable<UserFragmentFragment>;

  constructor(
    private selfGQL: SelfGQL,
    private editSelfGQL: EditSelfGQL,
    private loginGQL: LoginGQL
  ) {
    this.self$ = this.selfGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.self));
  }

  getSelf() {
    return { query: this.selfGQL, self$: this.self$ };
  }

  editSelf(input: EditSelfInput) {
    return this.editSelfGQL.mutate({ input });
  }

  login() {
    return this.loginGQL.mutate();
  }
}
