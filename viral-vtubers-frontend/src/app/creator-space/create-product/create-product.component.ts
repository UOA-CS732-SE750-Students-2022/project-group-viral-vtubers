import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { TagsComponent } from 'src/app/shared/components/tags/tags.component';
import {
  CategoryFragmentFragment,
  ProductDetailFragmentFragment,
  ProductDetailVariantFragmentFragment,
  TagFragmentFragment,
} from 'src/schema/type';

type SubcategoryType = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
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
export class CreateProductComponent implements OnInit {
  @ViewChild('appTags')
  tagsRef!: TagsComponent;

  categories$: Observable<CategoryFragmentFragment[]>;
  allTags$: Observable<TagFragmentFragment[]>;
  artistId = '';

  changePopup = false;
  selectedCategory?: CategoryFragmentFragment;
  selectedSubcategory?: SubcategoryType;

  images: string[] = [];

  variants: ProductDetailVariantFragmentFragment[] = [];

  freeToggles: boolean[] = [];

  adultBoolean = false;
  comment = true;
  categories?: CategoryFragmentFragment[];
  product?: ProductDetailFragmentFragment;

  productId = '';
  vrm = '';
  vrmURL?: SafeUrl;
  title = '';
  descriptionString = '';

  checkSubmit(
    variants: ProductDetailVariantFragmentFragment[],
    images: string[],
    selectedCategory?: CategoryFragmentFragment,
    selectedSubcategory?: SubcategoryType
  ): boolean {
    if (variants.length === 0) return false;

    for (const variant of variants) {
      if (variant.file === '') return false;
      if (variant.name === '') return false;
    }

    if (!selectedCategory) return false;

    if (!selectedSubcategory) return false;

    if (images.length === 0) return false;

    if (this.artistId === '') return false;

    return true;
  }

  constructor(
    private categoryService: CategoryService,
    private uploadService: UploadService,
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    userService.getSelf().self$.subscribe((self) => {
      this.artistId = self.id;
    });
    this.categories$ = this.categoryService.getCategories().categories$;
    this.categories$.subscribe((categories) => {
      this.categories = categories;
      if (this.product) {
        this.selectedCategory = this.categories?.find(
          (category) => category.id === this.product?.subcategory.category.id
        );
      }
    });
    this.allTags$ = this.productService.getTags().tags$;

    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (!productId) {
        return;
      }

      this.productService
        .getProduct(productId)
        .product$.subscribe((product) => {
          this.product = product;
          this.productId = product.id;
          this.selectedCategory = this.categories?.find(
            (category) => category.id === product.subcategory.category.id
          );
          this.selectedSubcategory = product.subcategory;
          this.vrm = product.vrm;
          if (this.vrm !== '') {
            this.vrmURL = this.getSafeUrl(
              '/vrm?vrm=' + encodeURIComponent(this.vrm)
            );
          }
          this.variants = [
            ...product.variants.map((variant) => ({
              ...variant,
              fileTypes: [variant.fileTypes.join(' ')],
            })),
          ];
          this.freeToggles = Array(this.variants.length);
          this.images = [product.titleImage, ...product.images];
          this.tagsRef.tags = product.tags;
          this.title = product.name;
          this.descriptionString = product.description;
          this.comment = product.isComment;
        });
    });
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
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

  removeImage(image: string): void {
    this.images = this.images.filter((i) => i !== image);
  }

  addVariant(): void {
    this.variants.push({
      id: '',
      file: '',
      fileName: '',
      fileTypes: [''],
      name: '',
      price: 1.0,
    });
    this.freeToggles.push(false);
  }

  removeVariantIndex(i: number) {
    this.variants.splice(i, 1);
  }

  ngOnInit(): void {}

  async handleNewImagesInput(images: any) {
    const files: FileList = images.files;
    const promises = Array.from(files).map((file) =>
      this.uploadService.upload(file)
    );

    const fileURIs = await Promise.all(promises);

    this.images = [...this.images, ...fileURIs];
  }

  async handleVRMInput(vrm: any) {
    const file: File = vrm.files[0];

    const fileURI = await this.uploadService.upload(file);

    this.vrmURL = this.getSafeUrl('/vrm?vrm=' + encodeURIComponent(fileURI));
    this.vrm = fileURI;
  }

  changeAdult(event: any) {
    const adult = event.target.value as string;
    this.adultBoolean = adult === 'true';
  }

  changeComment(event: any) {
    const comment = event.target.value as string;
    this.comment = comment === 'true';
  }

  changeVariantName(i: number, event: any) {
    const name = event.target.value as string;
    this.variants[i].name = name;
  }

  changeVariantPriceValue(i: number, event: any) {
    const price = event.target.value as number;
    this.variants[i].price = price;
  }

  changeVariantPriceFree(i: number, event: any) {
    const free = event.target.value as string;
    if (free === 'true') {
      this.freeToggles[i] = true;
      this.variants[i].price = 0.0;
      return;
    }
    this.freeToggles[i] = false;
  }

  changeVariantFileType(i: number, event: any) {
    const fileType = event.target.value as string;
    this.variants[i].fileTypes[0] = fileType;
  }

  async handleVariantFileInput(i: number, input: any) {
    const file: File = input.files[0];

    const fileURI = await this.uploadService.upload(file);

    this.variants[i].file = fileURI;
    this.variants[i].fileName = file.name;
  }

  async handleSubmit(name: string, description: string, draft: boolean) {
    let productId: string = this.productId;
    if (this.productId == '') {
      productId =
        (
          await firstValueFrom(
            this.productService.addProduct({
              artist: this.artistId,
              description: description,
              images: this.images.slice(1),
              isComment: this.comment,
              isDraft: draft,
              isMature: this.adultBoolean,
              name: name,
              numLikes: 0,
              subcategoryId: this.selectedSubcategory?.id ?? '',
              tags: this.tagsRef.tags.map((tag) => tag.id),
              titleImage: this.images[0],
              vrm: this.vrm ?? '',
            })
          )
        ).data?.addProduct.id ?? '';
    } else {
      await firstValueFrom(
        this.productService.editProduct({
          id: productId,
          description: description,
          images: this.images.slice(1),
          isComment: this.comment,
          isDraft: draft,
          isMature: this.adultBoolean,
          name: name,
          numLikes: 0,
          subcategoryId: this.selectedSubcategory?.id ?? '',
          tags: this.tagsRef.tags.map((tag) => tag.id),
          titleImage: this.images[0],
          vrm: this.vrm ?? '',
        })
      );
    }

    if (productId === '') {
      return;
    }

    const promises = this.variants.map(async (variant) => {
      if (variant.id === '') {
        await firstValueFrom(
          this.productService.addProductVariant({
            file: variant.file,
            fileName: variant.fileName,
            fileTypes:
              variant.fileTypes[0] !== ''
                ? variant.fileTypes[0].split(' ')
                : [],
            name: variant.name,
            price: variant.price,
            productId: productId,
          })
        );
        return;
      }
      await firstValueFrom(
        this.productService.editProductVariant({
          id: variant.id,
          file: variant.file,
          fileName: variant.fileName,
          fileTypes:
            variant.fileTypes[0] !== '' ? variant.fileTypes[0].split(' ') : [],
          name: variant.name,
          price: variant.price,
          productId: productId,
        })
      );
    });

    await Promise.all(promises);

    this.router.navigateByUrl('/creator');
  }
}
