import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ProductDetailFragmentFragment,
  ProductGQL,
  ProductPaginationFragmentFragment,
  ProductsCategoryGQL,
  ProductsGQL,
  ProductsSubategoryQueryGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product$: Observable<ProductDetailFragmentFragment>;

  products$: Observable<ProductPaginationFragmentFragment>;

  categoryProducts$: Observable<ProductPaginationFragmentFragment>;

  subcategoryProducts$: Observable<ProductPaginationFragmentFragment>;

  constructor(
    private productGQL: ProductGQL,
    private productsGQL: ProductsGQL,
    private productsCategoryGQL: ProductsCategoryGQL,
    private productsSubcategoryGQL: ProductsSubategoryQueryGQL
  ) {
    this.product$ = this.productGQL
      .watch({ id: '62781d1aa17d6a5ded7d4fe9' })
      .valueChanges.pipe(map((result) => result.data.product));

    this.products$ = productsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.products));

    this.categoryProducts$ = productsCategoryGQL
      .watch(
        { categoryId: '6276deb5fbc3a8262a1448e3' },
        {
          fetchPolicy: 'network-only',
        }
      )
      .valueChanges.pipe(map((result) => result.data.category.products));

    this.subcategoryProducts$ = productsSubcategoryGQL
      .watch(
        { subcategoryId: '6276e19ad8adca914945452b' },
        {
          fetchPolicy: 'network-only',
        }
      )
      .valueChanges.pipe(map((result) => result.data.subcategory.products));
  }

  getProduct() {
    return { query: this.productGQL, product$: this.product$ };
  }

  getProducts() {
    return { query: this.productsGQL, products$: this.products$ };
  }

  getProductsCategory() {
    return {
      query: this.productsCategoryGQL,
      products$: this.categoryProducts$,
    };
  }

  getProductsSubcategory() {
    return {
      query: this.productsSubcategoryGQL,
      products$: this.subcategoryProducts$,
    };
  }
}
