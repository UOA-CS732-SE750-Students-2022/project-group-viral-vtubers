import { Component, OnInit } from '@angular/core';
import { CartsFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: CartsFragmentFragment;
  constructor() {
    this.carts = {
      carts: [
        {
          numItems: 1,
          totalAmount: 29.99,
          seller: {
            id: 'artist1',
            displayName: 'Flynnie',
            profileImageURI: 'alt',
          },
          items: [
            {
              id: 'item1',
              name: 'test product',
              price: 29.99,
              images: ['alt'],
            },
          ],
        },
        {
          numItems: 2,
          totalAmount: 78.99,
          seller: {
            id: 'artist2',
            displayName: 'Vivi',
            profileImageURI: 'alt',
          },
          items: [
            {
              id: 'item2',
              name: 'chibi art',
              price: 29.99,
              images: ['alt'],
            },
            {
              id: 'item3',
              name: 'chibi digital plushie',
              price: 10000.04555,
              images: ['alt'],
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
