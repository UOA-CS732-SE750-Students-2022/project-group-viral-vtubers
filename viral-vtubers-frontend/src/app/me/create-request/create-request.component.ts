import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UploadService } from 'src/app/services/upload.service';
import { TagsComponent } from 'src/app/shared/components/tags/tags.component';
import {
  CategoryFragmentFragment,
  OrderFragmentFragment,
  TagFragmentFragment,
} from 'src/schema/type';

type SubcategoryType = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss'],
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
export class CreateRequestComponent implements OnInit {
  @ViewChild('appTags')
  tagsRef!: TagsComponent;

  allTags$: Observable<TagFragmentFragment[]>;

  changePopup = false;
  selectedCategory?: CategoryFragmentFragment;
  selectedSubcategory?: SubcategoryType;
  categories$: Observable<CategoryFragmentFragment[]>;

  orderId = '';
  artistId = '';

  requestTitle = '';
  requestImage = '';
  requestBounty = 1.0;
  requestDescription = '';
  requestComment = true;
  requestPriceDisable = false;
  selectedPrice = 'PRICE';

  categories?: CategoryFragmentFragment[];
  order?: OrderFragmentFragment;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private orderSerivce: OrderService,
    private uploadService: UploadService,
    private toasterService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.allTags$ = this.productService.getTags().tags$;
    this.categories$ = this.categoryService.getCategories().categories$;
    this.categories$.subscribe((categories) => {
      this.categories = categories;
      if (this.order) {
        this.selectedCategory = this.categories?.find(
          (category) => category.id === this.order?.subcategory.category.id
        );
      }
    });
    this.route.paramMap.subscribe((params) => {
      const orderId = params.get('orderId');
      if (!orderId) {
        return;
      }

      this.orderSerivce.getOrder(orderId).order$.subscribe((order) => {
        this.order = order;
        this.orderId = order.id;
        this.artistId = order.owner.id;

        this.tagsRef.tags = order.tags;

        this.requestTitle = order.name;
        this.requestImage = order.image;
        this.requestBounty = order.bounty;
        this.requestDescription = order.description;

        if (order.bounty === 0) {
          this.requestPriceDisable = true;
          this.selectedPrice = 'FREE';
        } else {
          this.requestPriceDisable = false;
          this.selectedPrice = 'PRICE';
        }

        this.selectedCategory = this.categories?.find(
          (category) => category.id === order.subcategory.category.id
        );
        this.selectedSubcategory = order.subcategory;
      });
    });
  }

  changeComment(event: any) {
    const comment = event.target.value as string;
    this.requestComment = comment === 'true';
  }

  setPrice(event: any) {
    if ('PRICE' === (event.target.value as string)) {
      this.requestBounty = 1;
      this.requestPriceDisable = false;
    } else {
      this.requestBounty = 0;
      this.requestPriceDisable = true;
    }
  }

  changeSubcategory(subcategory: SubcategoryType): void {
    this.selectedSubcategory = subcategory;
    this.hideChange();
  }

  showChange(): void {
    this.changePopup = true;
  }

  hideChange(): void {
    this.changePopup = false;
  }

  openCategory(category: CategoryFragmentFragment): void {
    if (this.selectedCategory?.id === category.id) {
      this.selectedCategory = undefined;
      return;
    }
    this.selectedCategory = category;
  }

  async handleImageInput(image: any) {
    const img: File = image.files[0];

    const fileURI = await this.uploadService.upload(img);

    this.requestImage = fileURI;
  }

  async handleSubmit(name: string, description: string, draft: boolean) {
    if (!this.selectedSubcategory) {
      return;
    }

    if (this.artistId == '') {
      await firstValueFrom(
        this.orderSerivce.addOrder({
          name: name,
          description: description,
          bounty: this.requestBounty,
          image: this.requestImage,
          isDraft: draft,
          isComment: this.requestComment,
          subcategoryId: this.selectedSubcategory.id,
          tagIds: this.tagsRef.tags.map((tag) => tag.id),
        })
      );
      this.toasterService.success('Created new Commission', 'Success', {
        progressAnimation: 'decreasing',
        progressBar: true,
      });
    } else {
      await firstValueFrom(
        this.orderSerivce.editOrder({
          id: this.orderId,
          name: name,
          description: description,
          bounty: this.requestBounty,
          image: this.requestImage,
          isDraft: draft,
          isComment: this.requestComment,
          subcategoryId: this.selectedSubcategory.id,
          tagIds: this.tagsRef.tags.map((tag) => tag.id),
        })
      );
      this.toasterService.success('Edited Commission', 'Success', {
        progressAnimation: 'decreasing',
        progressBar: true,
      });
    }

    this.router.navigateByUrl('/me/orders');
  }

  ngOnInit(): void {}
}
