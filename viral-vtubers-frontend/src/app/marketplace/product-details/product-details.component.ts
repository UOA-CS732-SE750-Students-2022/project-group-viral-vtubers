import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
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
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
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
}
