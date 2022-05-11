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
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };

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
          'https://pbs.twimg.com/profile_images/890968801222590464/zy5R43Sf_400x400.jpg',
      },
      {
        id: '1',
        name: 'Aya 着替B ver0.98',
        minPrice: 12.99,
        numLikes: 29,
        titleImage:
          'https://i.pinimg.com/originals/df/c7/4b/dfc74b6867617fc8220fddb0efc9d916.jpg',
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
}
