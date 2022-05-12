import { Component, OnInit } from '@angular/core';
import { CartFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: { carts: CartFragmentFragment[] };
  constructor() {
    this.carts = {
      carts: [
        {
          numItems: 1,
          totalAmount: 29.99,
          seller: {
            id: 'artist1',
            displayName: 'Flynnie',
            status: 'Hello',
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
              file: 'test.vrm',
              fileName: 'test.vrm',
              fileTypes: ['.vrm'],
            },
          ],
        },
        {
          numItems: 2,
          totalAmount: 78.99,
          seller: {
            id: 'artist2',
            displayName: 'Vivi',
            status: 'Hello',
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
              file: 'test.vrm',
              fileName: 'test.vrm',
              fileTypes: ['.vrm'],
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
              file: 'test.vrm',
              fileName: 'test.vrm',
              fileTypes: ['.vrm'],
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
