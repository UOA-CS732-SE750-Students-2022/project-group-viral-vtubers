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
  images$: Observable<GalleryItem[]>;

  productDetails$: Observable<ProductDetailFragmentFragment>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    const product = this.productService.getProduct();
    this.productDetails$ = product.product$;

    console.log('lol');

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);

      product.query.fetch({ id: id ?? '' });
    });

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
  }

  ngOnInit(): void {}
}
