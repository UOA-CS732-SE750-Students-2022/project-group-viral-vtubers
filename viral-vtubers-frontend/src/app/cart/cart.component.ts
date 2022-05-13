import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartFragmentFragment } from 'src/schema/type';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts$: Observable<CartFragmentFragment[]>;
  constructor(private cartService: CartService) {
    this.carts$ = this.cartService.getCarts().carts$;
  }

  ngOnInit(): void {}

  addToCart(productId: string, variantId: string) {
    this.cartService.addToCart(productId, variantId).subscribe();
  }

  removeFromCart(productId: string, variantId: string) {
    this.cartService.removeFromCart(productId, variantId).subscribe();
  }

  emptyCart(sellerId: string) {
    this.cartService.emptyCart(sellerId).subscribe();
  }

  checkout(sellerId: string) {
    return this.cartService.checkout(sellerId).subscribe();
  }
}
