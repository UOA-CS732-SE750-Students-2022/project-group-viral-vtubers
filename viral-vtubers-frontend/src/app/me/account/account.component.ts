import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {
  UserAccountFragmentFragment,
  UserBlurbFragmentFragment,
} from 'src/schema/type';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  account$: Observable<UserAccountFragmentFragment>;

  constructor(private userService: UserService) {
    this.account$ = userService.getAccount().account$;
  }

  ngOnInit(): void {}
}
