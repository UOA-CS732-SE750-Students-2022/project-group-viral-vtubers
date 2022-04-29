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
              variants: [
                {
                  id: 'variant-1',
                  name: 'test product',
                  price: 29.99,
                },
              ],
              titleImage: 'https://picsum.photos/200',
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
              variants: [
                {
                  id: 'variant-2',
                  name: 'test product 2',
                  price: 29.99,
                },
              ],
              titleImage: 'https://picsum.photos/200',
            },
            {
              id: 'item3',
              name: 'chibi digital plushie',
              variants: [
                {
                  id: 'variant-3',
                  name: 'test product 3',
                  price: 10000.04555,
                },
              ],
              titleImage: 'https://picsum.photos/200',
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
