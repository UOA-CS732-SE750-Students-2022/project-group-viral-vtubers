import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { cartQuery } from 'src/graphql/queries/cart.query';
import {
  AddToCartGQL,
  CartFragmentFragment,
  CartGQL,
  CheckoutGQL,
  EmptyCartGQL,
  PurchaseFragmentFragment,
  PurchasesGQL,
  RemoveFromCartGQL,
  SalesGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts$?: Observable<CartFragmentFragment[]>;
  purchases$?: Observable<PurchaseFragmentFragment[]>;
  sales$?: Observable<PurchaseFragmentFragment[]>;

  constructor(
    private cartGQL: CartGQL,
    private addToCartGQL: AddToCartGQL,
    private removeFromCartGQL: RemoveFromCartGQL,
    private emptyCartGQL: EmptyCartGQL,
    private checkoutGQL: CheckoutGQL,
    private purchasesGQL: PurchasesGQL,
    private salesGQL: SalesGQL
  ) {}

  getCarts() {
    this.carts$ = this.cartGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.carts));
    return { query: this.cartGQL, carts$: this.carts$ };
  }

  getPurchases() {
    this.purchases$ = this.purchasesGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.purchases));
    return { query: this.purchasesGQL, purchases$: this.purchases$ };
  }

  getSales() {
    this.sales$ = this.salesGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.sales));
    return { query: this.salesGQL, sales$: this.sales$ };
  }

  addToCart(productId: string, variantId: string) {
    return this.addToCartGQL.mutate({ productId, variantId });
  }

  removeFromCart(productId: string, variantId: string) {
    return this.removeFromCartGQL.mutate(
      { productId, variantId },
      {
        refetchQueries: [
          {
            query: cartQuery,
          },
        ],
      }
    );
  }

  emptyCart(sellerId: string) {
    return this.emptyCartGQL.mutate(
      { sellerId },
      {
        refetchQueries: [
          {
            query: cartQuery,
          },
        ],
      }
    );
  }

  checkout(sellerId: string) {
    return this.checkoutGQL.mutate(
      { sellerId },
      {
        refetchQueries: [
          {
            query: cartQuery,
          },
        ],
      }
    );
  }
}
