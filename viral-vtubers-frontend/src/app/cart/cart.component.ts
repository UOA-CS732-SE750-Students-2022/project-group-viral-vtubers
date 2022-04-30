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
            profileImageURI:
              'https://pbs.twimg.com/profile_images/510880770668261376/vdt4yfOx_400x400.png',
          },
          items: [
            {
              id: 'item1',
              name: 'test product',
              price: 39.99,
              product: {
                id: 'variant-1',
                name: 'test product',
                titleImage: 'https://picsum.photos/200',
              },
            },
          ],
        },
        {
          numItems: 2,
          totalAmount: 78.99,
          seller: {
            id: 'artist2',
            displayName: 'Vivi',
            profileImageURI:
              'https://pbs.twimg.com/profile_images/510880770668261376/vdt4yfOx_400x400.png',
          },
          items: [
            {
              id: 'item2',
              name: 'chibi art',
              price: 29.99,
              product: {
                id: 'variant-2',
                name: 'test product 2',
                titleImage: 'https://picsum.photos/200',
              },
            },
            {
              id: 'item3',
              name: 'chibi digital plushie',
              price: 10000.04555,
              product: {
                id: 'variant-3',
                name: 'test product 3',
                titleImage: 'https://picsum.photos/200',
              },
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
