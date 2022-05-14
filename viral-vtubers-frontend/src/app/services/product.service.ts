import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  AddProductGQL,
  AddProductInput,
  AddProductVariant,
  AddProductVariantGQL,
  EditProductGQL,
  EditProductInput,
  EditProductVariant,
  EditProductVariantGQL,
  LikeProductGQL,
  ProductDetailFragmentFragment,
  ProductFilter,
  ProductGQL,
  ProductPaginationFragmentFragment,
  ProductsCategoryGQL,
  ProductsGQL,
  ProductSort,
  ProductsSubategoryQueryGQL,
  TagFragmentFragment,
  TagsGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product$?: Observable<ProductDetailFragmentFragment>;
  products$?: Observable<ProductPaginationFragmentFragment>;
  categoryProducts$?: Observable<ProductPaginationFragmentFragment>;
  subcategoryProducts$?: Observable<ProductPaginationFragmentFragment>;
  tags$?: Observable<TagFragmentFragment[]>;

  constructor(
    private productGQL: ProductGQL,
    private productsGQL: ProductsGQL,
    private productsCategoryGQL: ProductsCategoryGQL,
    private productsSubcategoryGQL: ProductsSubategoryQueryGQL,
    private likeProductGQL: LikeProductGQL,
    private tagsGQL: TagsGQL,
    private addProductGQL: AddProductGQL,
    private editProductGQL: EditProductGQL,
    private addProductVariantGQL: AddProductVariantGQL,
    private editProductVariantGQL: EditProductVariantGQL
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

  getTags() {
    this.tags$ = this.tagsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.tags));

    return {
      query: this.tagsGQL,
      tags$: this.tags$,
    };
  }

  likeProduct(productId: string, like: boolean) {
    return this.likeProductGQL.mutate({ id: productId, like });
  }

  addProduct(input: AddProductInput) {
    return this.addProductGQL.mutate({ input });
  }

  editProduct(input: EditProductInput) {
    return this.editProductGQL.mutate({ input });
  }

  addProductVariant(input: AddProductVariant) {
    return this.addProductVariantGQL.mutate({ input });
  }

  editProductVariant(input: EditProductVariant) {
    return this.editProductVariantGQL.mutate({ input });
  }
}
