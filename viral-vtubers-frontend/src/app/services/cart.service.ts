import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  AddToCartGQL,
  CartFragmentFragment,
  CartGQL,
  CheckoutGQL,
  EmptyCartGQL,
  RemoveFromCartGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts$?: Observable<CartFragmentFragment[]>;

  constructor(
    private cartGQL: CartGQL,
    private addToCartGQL: AddToCartGQL,
    private removeFromCartGQL: RemoveFromCartGQL,
    private emptyCartGQL: EmptyCartGQL,
    private checkoutGQL: CheckoutGQL
  ) {}

  getCarts() {
    this.carts$ = this.cartGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.carts));
    return { query: this.cartGQL, carts$: this.carts$ };
  }

  addToCart(productId: string, variantId: string) {
    return this.addToCartGQL.mutate({ productId, variantId });
  }

  removeFromCart(productId: string, variantId: string) {
    return this.removeFromCartGQL.mutate({ productId, variantId });
  }

  emptyCart(sellerId: string) {
    return this.emptyCartGQL.mutate({ sellerId });
  }

  checkout(sellerId: string) {
    return this.checkoutGQL.mutate({ sellerId });
  }
}
