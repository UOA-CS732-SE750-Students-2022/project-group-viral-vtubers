import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Service, UserProfileFragmentFragment } from 'src/schema/type';

import { UserService } from '../services/user.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserProfileComponent implements OnInit {
  @Input()
  isEdit = false;

  showNewService = false;

  showEditProfile = false;

  user$?: Observable<UserProfileFragmentFragment>;

  services: Service[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }

      const userProfile = this.userService.getUserProfile(id);
      this.user$ = userProfile.userProfile$;
      this.user$.subscribe(({ services }) => {
        this.services = services;
      });
    });
  }

  drop(
    event: CdkDragDrop<{
      item: any;
      index: number;
    }>
  ) {
    moveItemInArray(
      this.services,
      event.previousContainer.data.index,
      event.container.data.index
    );
  }

  remove(service: Service) {
    console.log(service);
    this.services = this.services.filter((s) => s.id !== service.id);
  }

  openNewService() {
    this.showNewService = true;
  }

  closeNewService() {
    this.showNewService = false;
  }

  openEditProfile() {
    this.showEditProfile = true;
  }

  closeEditProfile() {
    this.showEditProfile = false;
  }

  ngOnInit(): void {}
}
