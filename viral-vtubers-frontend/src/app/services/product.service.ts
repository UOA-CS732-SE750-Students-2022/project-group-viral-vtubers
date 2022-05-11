import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  LikeProductGQL,
  ProductDetailFragmentFragment,
  ProductFilter,
  ProductGQL,
  ProductPaginationFragmentFragment,
  ProductsCategoryGQL,
  ProductsGQL,
  ProductSort,
  ProductsSubategoryQueryGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product$?: Observable<ProductDetailFragmentFragment>;
  products$?: Observable<ProductPaginationFragmentFragment>;
  categoryProducts$?: Observable<ProductPaginationFragmentFragment>;
  subcategoryProducts$?: Observable<ProductPaginationFragmentFragment>;

  constructor(
    private productGQL: ProductGQL,
    private productsGQL: ProductsGQL,
    private productsCategoryGQL: ProductsCategoryGQL,
    private productsSubcategoryGQL: ProductsSubategoryQueryGQL,
    private likeProductGQL: LikeProductGQL
  ) {}

  getProduct(productId: string) {
    this.product$ = this.productGQL
      .watch({ id: productId })
      .valueChanges.pipe(map((result) => result.data.product));

    return { query: this.productGQL, product$: this.product$ };
  }

  getProducts(
    filter?: ProductFilter,
    sort?: ProductSort,
    cursor?: string,
    limit?: number
  ) {
    this.products$ = this.productsGQL
      .watch({ filter, sort, cursor, limit })
      .valueChanges.pipe(map((result) => result.data.products));
    return { query: this.productsGQL, products$: this.products$ };
  }

  getProductsCategory(
    categoryId: string,
    filter?: ProductFilter,
    sort?: ProductSort,
    cursor?: string,
    limit?: number
  ) {
    this.categoryProducts$ = this.productsCategoryGQL
      .watch({ categoryId, filter, sort, cursor, limit })
      .valueChanges.pipe(map((result) => result.data.category.products));

    return {
      query: this.productsCategoryGQL,
      products$: this.categoryProducts$,
    };
  }

  getProductsSubcategory(
    subcategoryId: string,
    filter?: ProductFilter,
    sort?: ProductSort,
    cursor?: string,
    limit?: number
  ) {
    this.subcategoryProducts$ = this.productsSubcategoryGQL
      .watch({ subcategoryId: subcategoryId, filter, sort, cursor, limit })
      .valueChanges.pipe(map((result) => result.data.subcategory.products));

    return {
      query: this.productsSubcategoryGQL,
      products$: this.subcategoryProducts$,
    };
  }

  likeProduct(productId: string, like: boolean) {
    return this.likeProductGQL.mutate({ id: productId, like });
  }
}
