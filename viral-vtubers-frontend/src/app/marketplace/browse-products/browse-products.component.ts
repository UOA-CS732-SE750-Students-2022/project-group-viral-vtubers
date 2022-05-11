import { Component, Input, OnInit } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss'],
})
export class BrowseProductsComponent implements OnInit {
  products: Array<ProductBlurbFragmentFragment>;

  minValue = 0;
  maxValue = 800;
  options: Options = {
    floor: 0,
    ceil: 800,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b> $' + value;
        case LabelType.High:
          return '<b>Max:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };

  sortOptions: selectItem[] = [
    { id: 'newest', name: 'Time added (newest) ' },
    { id: 'oldest', name: 'Time added (oldest) ' },
    { id: 'price', name: 'Price (lowest to highest) ' },
    { id: 'price-reverse', name: 'Price (highest to lowest) ' },
    { id: 'likes', name: 'Number of likes ' },
  ];
  selectedSortOption: selectItem = this.sortOptions[0];

  title = 'All Products';

  // TODO these are placeholder filter options, replace with real ones when linking.
  categoryFilters: selectItem[] = [
    { id: 'all', name: 'All' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'whole', name: 'Whole Models' },
    { id: 'backgrounds', name: 'Backgrounds' },
  ];
  selectedCategoryFilter: selectItem = this.categoryFilters[0];

  // TODO these are placeholder filter options, replace with real ones when linking.
  subCategoryFilters: selectItem[] = [{ id: 'all', name: 'All' }];
  selectedSubCategoryFilter: selectItem = this.subCategoryFilters[0];

  // TODO these are placeholder filter options, replace with real ones when linking.
  ageRestrictionFilters: selectItem[] = [
    { id: 'all', name: 'All' },
    { id: 'adult', name: 'Adult only' },
    { id: 'sfw', name: 'SFW only' },
  ];
  selectedAgeRestrictionFilter: selectItem = this.ageRestrictionFilters[0];

  constructor() {
    // TODO: set title: this.title = ... (category > subcategory)

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
          'https://cdn.discordapp.com/attachments/973434166576291860/973838486966788126/unknown.png',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://lovelive-as-global.com/assets/img/member/ms/name_nozomi_visual2.png',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://c4.wallpaperflare.com/wallpaper/229/65/146/anime-love-live-nozomi-tojo-wallpaper-preview.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvuGoYH3SjULe-zItrAlyS7MaJPoR0wsjRZWKHbNXsfAU0bHLrRF4j1tP93k7jyhbnqk&usqp=CAU',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoAqbxmqSwl8qjS9Ad3BTjTsBwZCzvhJ7Jw&usqp=CAU',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://64.media.tumblr.com/2c1330e52fe9a1f22729be266f37477f/tumblr_np0da4RvDz1uwhadvo3_400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://64.media.tumblr.com/256c6a85096830310954813172b8e266/tumblr_np0da4RvDz1uwhadvo1_250.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyF3bjSJt9T-dHmFcPiRWfPx9gDCOOGCGz8LoY6AJ1snM-mJNFKZLYa7xiQCVwM42Mf-E&usqp=CAU',
      },
    ];
  }

  ngOnInit(): void {}

  resetFilters() {
    this.selectedCategoryFilter = this.categoryFilters[0];
    this.selectedSubCategoryFilter = this.subCategoryFilters[0];
    this.selectedAgeRestrictionFilter = this.ageRestrictionFilters[0];
    this.minValue = 0;
    this.maxValue = 800;
  }
}

interface selectItem {
  id: string;
  name: string;
}
