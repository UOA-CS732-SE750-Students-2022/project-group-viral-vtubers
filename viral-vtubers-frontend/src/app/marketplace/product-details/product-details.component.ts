import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, GalleryRef } from 'ng-gallery';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ProductDetailFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  images$?: Observable<GalleryItem[]>;

  productDetails$?: Observable<ProductDetailFragmentFragment>;

  galleryId = 'image-gallery';

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private gallery: Gallery
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }
      const product = this.productService.getProduct(id);
      this.productDetails$ = product.product$;

      this.productDetails$.subscribe(({ titleImage, images, vrm }) => {
        const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
        galleryRef.reset();
        if (vrm !== '' && !!vrm) {
          galleryRef.addIframe({
            src: '/vrm?vrm=' + encodeURIComponent(vrm),
            thumb: 'assets/icons/vrm-preview.svg',
          });
        }

        galleryRef.addImage({
          src: titleImage,
          thumb: titleImage,
        });
        images.forEach((image) => {
          galleryRef.addImage({
            src: image,
            thumb: image,
          });
        });
      });
    });
  }

  ngOnInit(): void {}

  follow(artistId: string): void {
    this.userService.follow(artistId, true).subscribe();
  }

  unfollow(artistId: string): void {
    this.userService.follow(artistId, false).subscribe();
  }

  like(productId: string, isLiked: boolean): void {
    this.productService.likeProduct(productId, !isLiked).subscribe();
  }
}
