import { Component, Input, OnInit } from '@angular/core';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input()
  public products: Array<ProductBlurbFragmentFragment> = [
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
