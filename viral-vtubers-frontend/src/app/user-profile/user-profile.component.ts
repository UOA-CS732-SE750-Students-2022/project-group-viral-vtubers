import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Observable } from 'rxjs';
import {
  PriceEnum,
  Service,
  TagFragmentFragment,
  UserProfileFragmentFragment,
} from 'src/schema/type';

import { ProductService } from '../services/product.service';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../shared/auth/auth.service';
import { TagsComponent } from '../shared/components/tags/tags.component';

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
export class UserProfileComponent implements OnInit, AfterViewChecked {
  @ViewChild('tagsRef')
  tagsRef!: TagsComponent;

  isEdit = false;
  selfId?: string;
  userId? = '';

  showNewService = false;

  showEditProfile = false;

  user$?: Observable<UserProfileFragmentFragment>;

  services: Service[] = [];

  serviceId = '';
  serviceDescription = '';
  serviceTitle = '';
  servicePrice = 1;

  selectedPriceType = 'HOUR';
  selectedPrice = 'PRICE';

  userBio = '';
  userStatus = '';
  userProfileURI?: string;

  priceType: PriceEnum = PriceEnum.Hour;
  price = true;

  tags: TagFragmentFragment[] = [];
  allTags$?: Observable<TagFragmentFragment[]>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private productService: ProductService,
    private uploadService: UploadService,
    private toasterService: ToastrService
  ) {
    userService.getSelf().self$.subscribe((self) => {
      this.selfId = self.id;

      if (!this.selfId || !this.userId) {
        return;
      }

      if (this.selfId === this.userId) {
        this.isEdit = true;
        this.userBio = self.bio;
        this.userStatus = self.status;
        this.userProfileURI = self.profileImageURI;
        this.allTags$ = this.productService.getTags().tags$;
      }
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }

      const userProfile = this.userService.getUserProfile(id);
      this.user$ = userProfile.userProfile$;
      this.user$.subscribe(({ services, tags }) => {
        this.services = [...services];
        this.tags = [...tags];
        this.setTag(tags);
      });

      this.userId = id;

      if (!this.selfId || !this.userId) {
        return;
      }

      if (this.selfId === this.userId) {
        this.isEdit = true;
      }
    });
  }

  async handleProfileImageInput(profile: any) {
    const image: File = profile.files[0];

    const fileURI = await this.uploadService.upload(image);

    this.userProfileURI = fileURI;
  }

  async drop(
    event: CdkDragDrop<{
      item: any;
      index: number;
    }>
  ) {
    const prev = Object.assign(
      {},
      this.services[event.previousContainer.data.index]
    );
    const next = Object.assign({}, this.services[event.container.data.index]);

    await firstValueFrom(
      this.userService.editService({
        id: next.id,
        name: prev.name,
        description: prev.description,
        priceType: prev.priceType,
        price: prev.price,
      })
    );

    this.userService
      .editService({
        id: prev.id,
        name: next.name,
        description: next.description,
        priceType: next.priceType,
        price: next.price,
      })
      .subscribe();
  }

  remove(service: Service) {
    this.services = this.services.filter((s) => s.id !== service.id);

    this.userService.deleteService(service.id).subscribe();
    this.toasterService.success('Service removed', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  openNewService() {
    this.serviceId = '';
    this.serviceTitle = '';
    this.serviceDescription = '';
    this.servicePrice = 1.0;
    this.priceType = PriceEnum.Hour;
    this.price = true;
    this.selectedPrice = 'PRICE';
    this.selectedPriceType = 'HOUR';
    this.showNewService = true;
  }

  closeNewService() {
    this.showNewService = false;
  }

  setPrice(event: any) {
    if ('PRICE' === (event.target.value as string)) {
      this.price = true;
    }
  }

  setPriceType(event: any) {
    const priceType = event.target.value as string;

    switch (priceType) {
      case 'HOUR':
        this.priceType = PriceEnum.Hour;

        return;
      case 'EACH':
        this.priceType = PriceEnum.Each;
        return;

      case 'POA':
        this.price = false;
        this.priceType = PriceEnum.Poa;
        return;
    }
  }

  addService() {
    if (this.serviceTitle === '') return;

    if (this.serviceDescription === '') return;

    this.userService
      .addService({
        name: this.serviceTitle,
        description: this.serviceDescription,
        priceType: this.priceType,
        price: this.servicePrice,
      })
      .subscribe();
    this.toasterService.success('New service added', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });

    this.closeNewService();
  }

  editService() {
    if (this.serviceTitle === '') return;

    if (this.serviceDescription === '') return;

    this.userService
      .editService({
        id: this.serviceId,
        name: this.serviceTitle,
        description: this.serviceDescription,
        priceType: this.priceType,
        price: this.servicePrice,
      })
      .subscribe();
    this.toasterService.success('Service edited', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });

    this.closeNewService();
  }

  editSelf() {
    this.userService
      .editSelf({
        tagIds: this.tagsRef.tags.map((t) => t.id),
        status: this.userStatus,
        bio: this.userBio,
        profileImageURI: this.userProfileURI,
      })
      .subscribe();
    this.toasterService.success('Profile edited', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });

    this.showEditProfile = false;
  }

  openEditProfile() {
    this.showEditProfile = true;
    this.setTag(this.tags);
  }

  closeEditProfile() {
    this.showEditProfile = false;
  }

  openEditService(service: Service) {
    if (!this.isEdit) return;

    this.serviceId = service.id;
    this.serviceTitle = service.name;
    this.serviceDescription = service.description;
    this.servicePrice = service.price;
    this.priceType = service.priceType;
    if (this.priceType === PriceEnum.Poa) {
      this.price = false;
      this.selectedPrice = 'POA';
      this.selectedPriceType = 'HOUR';
    } else {
      this.selectedPrice = 'PRICE';
      this.selectedPriceType = this.priceType.toString();
    }

    this.showNewService = true;
  }

  submitService() {
    if (this.serviceId === '') {
      this.addService();
      return;
    }
    this.editService();
  }

  ngAfterViewChecked(): void {
    this.setTag(this.tags);
  }

  setTag(tags: TagFragmentFragment[]) {
    if (this.tagsRef && this.tagsRef.tags.length === 0) {
      this.tagsRef.tags = Object.assign([], tags);
    }
  }

  ngOnInit(): void {}
}
