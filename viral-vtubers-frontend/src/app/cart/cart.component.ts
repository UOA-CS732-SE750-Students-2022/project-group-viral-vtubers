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
}
