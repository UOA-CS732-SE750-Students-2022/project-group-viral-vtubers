import { Component, OnInit } from '@angular/core';
import { PurchaseFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  purchases: PurchaseFragmentFragment[];

  constructor() {
    this.purchases = [
      {
        id: '1',
        placed: '2020-01-01',
        seller: {
          id: '1',
          displayName: 'NozomiSenpai',
          profileImageURI:
            'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
          status: 'I am very cool',
        },
        items: [
          {
            id: '1',
            name: 'Toujou Nozomi',
            price: 100,
            product: {
              id: '1',
              name: 'Toujou Nozomi',
              titleImage:
                'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
            },
            file: 'https://static.zerochan.net/Toujou.Nozomi.full.3305292.png',
            fileName: 'test.vrm',
            fileTypes: ['vrm'],
          },
        ],
      },

      {
        id: '1',
        placed: '2020-01-01',
        seller: {
          id: '1',
          displayName: 'NozomiSenpai',
          profileImageURI:
            'https://static.zerochan.net/Toujou.Nozomi.full.3294721.jpg',
          status: 'I am very cool',
        },
        items: [
          {
            id: '1',
            name: 'Toujou Nozomi',
            price: 100,
            product: {
              id: '1',
              name: 'Toujou Nozomi',
              titleImage:
                'https://static.zerochan.net/Toujou.Nozomi.full.3289426.jpg',
            },
            file: 'https://static.zerochan.net/Toujou.Nozomi.full.3305292.png',
            fileName: 'hihihitest.vrm',
            fileTypes: ['vrm'],
          },
        ],
      },
      {
        id: '1',
        placed: '2020-01-01',
        seller: {
          id: '1',
          displayName: 'NozomiSenpai',
          profileImageURI:
            'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
          status: 'I am very cool',
        },
        items: [
          {
            id: '1',
            name: 'Toujou Nozomi',
            price: 100,
            product: {
              id: '1',
              name: 'Toujou Nozomi',
              titleImage:
                'https://static.zerochan.net/Toujou.Nozomi.full.3298036.jpg',
            },
            file: 'https://static.zerochan.net/Toujou.Nozomi.full.3298036.jpg',
            fileName: 'test.vrm',
            fileTypes: ['vrm'],
          },
        ],
      },
      {
        id: '1',
        placed: '2020-01-01',
        seller: {
          id: '1',
          displayName: 'NozomiSenpai',
          profileImageURI:
            'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
          status: 'I am very cool',
        },
        items: [
          {
            id: '1',
            name: 'Toujou Nozomi',
            price: 100,
            product: {
              id: '1',
              name: 'Toujou Nozomi',
              titleImage:
                'https://static.zerochan.net/Toujou.Nozomi.full.3304931.jpg',
            },
            file: 'https://static.zerochan.net/Toujou.Nozomi.full.3304931.jpg',
            fileName: 'test.vrm',
            fileTypes: ['vrm'],
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
