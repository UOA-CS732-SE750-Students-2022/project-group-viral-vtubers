import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { map, Observable } from 'rxjs';
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

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }
      const product = this.productService.getProduct(id);
      this.productDetails$ = product.product$;

      this.images$ = product.product$.pipe(
        map((data) => [
          new ImageItem({
            src: data.titleImage,
            thumb: data.titleImage,
          }),
          ...data.images.map((image) => {
            return new ImageItem({ src: image, thumb: image });
          }),
        ])
      );
    });
  }

  ngOnInit(): void {}

  follow(artistId: string): void {
    console.log(artistId);
    this.userService.follow(artistId, true).subscribe();
  }

  unfollow(artistId: string): void {
    this.userService.follow(artistId, false).subscribe();
  }

  like(productId: string, isLiked: boolean): void {
    this.productService.likeProduct(productId, !isLiked).subscribe();
  }
}
