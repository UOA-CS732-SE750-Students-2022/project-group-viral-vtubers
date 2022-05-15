import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private cartService: CartService,
    private toasterService: ToastrService
  ) {
    this.carts$ = this.cartService.getCarts().carts$;
  }

  ngOnInit(): void {}

  addToCart(productId: string, variantId: string) {
    this.cartService.addToCart(productId, variantId).subscribe();
    this.toasterService.success('Added to Cart', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  removeFromCart(productId: string, variantId: string) {
    this.cartService.removeFromCart(productId, variantId).subscribe();
    this.toasterService.success('Removed from Cart', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  emptyCart(sellerId: string) {
    this.cartService.emptyCart(sellerId).subscribe();
  }

  checkout(sellerId: string) {
    this.cartService.checkout(sellerId).subscribe();
    this.toasterService.success('Cart Purchased', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }
}
