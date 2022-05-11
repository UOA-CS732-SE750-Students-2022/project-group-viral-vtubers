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
  product$?: Observable<ProductDetailFragmentFragment>;
  products$: Observable<ProductPaginationFragmentFragment>;
  categoryProducts$?: Observable<ProductPaginationFragmentFragment>;
  subcategoryProducts$?: Observable<ProductPaginationFragmentFragment>;

  constructor(
    private productGQL: ProductGQL,
    private productsGQL: ProductsGQL,
    private productsCategoryGQL: ProductsCategoryGQL,
    private productsSubcategoryGQL: ProductsSubategoryQueryGQL
  ) {
    this.products$ = productsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.products));
  }

  getProduct(productId: string) {
    this.product$ = this.productGQL
      .watch({ id: productId })
      .valueChanges.pipe(map((result) => result.data.product));

    return { query: this.productGQL, product$: this.product$ };
  }

  getProducts() {
    return { query: this.productsGQL, products$: this.products$ };
  }

  getProductsCategory(categoryId: string) {
    this.categoryProducts$ = this.productsCategoryGQL
      .watch({ categoryId: categoryId })
      .valueChanges.pipe(map((result) => result.data.category.products));

    return {
      query: this.productsCategoryGQL,
      products$: this.categoryProducts$,
    };
  }

  getProductsSubcategory(subcategoryId: string) {
    this.subcategoryProducts$ = this.productsSubcategoryGQL
      .watch({ subcategoryId: subcategoryId })
      .valueChanges.pipe(map((result) => result.data.subcategory.products));

    return {
      query: this.productsSubcategoryGQL,
      products$: this.subcategoryProducts$,
    };
  }
}
