import { Component, OnInit } from '@angular/core';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  sortOptions: sortBy[] = [
    { id: 'newest', name: 'Time added (newest) ' },
    { id: 'oldest', name: 'Time added (oldest) ' },
  ];
  selectedSortOption: sortBy = this.sortOptions[0];

  products: ProductBlurbFragmentFragment[];

  constructor() {
    this.products = [
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}

interface sortBy {
  id: string;
  name: string;
}
