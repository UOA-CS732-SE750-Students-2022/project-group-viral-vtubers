import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartFragmentFragment, CartGQL } from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts$: Observable<CartFragmentFragment[]>;

  constructor(private cartGQL: CartGQL) {
    this.carts$ = this.cartGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.carts));
  }

  getCarts() {
    return { query: this.cartGQL, carts$: this.carts$ };
  }
}
