import { Component, OnInit } from '@angular/core';
import { PriceEnum, UserProfileFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: UserProfileFragmentFragment;

  constructor() {
    this.user = {
      id: '0',
      bio: 'Hi everyone! My name is Nozomi, and I love to make  vtuber shit. Just hit me up if you want anything made! I specialise in making hair, feet, and breast augmentations. ',
      numCompletedCommissions: 183,
      displayName: 'NozomiSenpai',
      numLikes: 4821,
      profileImageURI:
        'https://pbs.twimg.com/profile_images/510880770668261376/vdt4yfOx_400x400.png',
      isFollowing: true,
      tags: [
        {
          id: '0',
          name: 'colouring',
        },
        {
          id: '1',
          name: 'hair',
        },
        {
          id: '2',
          name: 'feet',
        },
      ],
      services: [
        {
          description: 'I can make your hair look good!',
          id: '0',
          name: 'Hair modding',
          price: 10.9999,
          priceType: PriceEnum.Each,
        },
        {
          description: 'Feet modelling',
          id: '1',
          name: 'I will model your feet for you . Simple as that. ',
          price: 9.5,
          priceType: PriceEnum.Hour,
        },
        {
          description:
            'Bring your character to life! I am just gonna type normally now, it’s my new lorem ipsum.',
          id: '2',
          name: 'Character from scratch',
          price: 19.9999,
          priceType: PriceEnum.Hour,
        },
        {
          description:
            'Make your boobs bigger! Or smaller if you are Hiru. Definitely a fair price. Buy it, I dare you. Do it! Come on...',
          id: '3',
          name: 'Breast augmentation',
          price: 20000,
          priceType: PriceEnum.Each,
        },
        {
          description:
            'Name anything and I’ll make if for you! Just hit me up, and we’ll figure out something.',
          id: '4',
          name: 'Anything at all',
          price: 20000,
          priceType: PriceEnum.Each,
        },
      ],
      products: [
        {
          id: 'a',
          name: 'Aya 着替B ver0.98',
          variants: [
            {
              id: 'v1',
              name: 'aya',
              price: 20.0,
            },
          ],
          images: [
            'https://pbs.twimg.com/profile_images/950544018160709632/TBueVZZr_400x400.jpg',
          ],
        },
        {
          id: 'b',
          name: 'S0iRu',
          variants: [
            {
              id: 'v2',
              name: 's0ru',
              price: 15.0,
            },
          ],
          images: [
            'https://pbs.twimg.com/profile_images/890968801222590464/zy5R43Sf_400x400.jpg',
          ],
        },
        {
          id: 'c',
          name: 'ショートボブMk-III',
          variants: [
            {
              id: 'v3',
              name: 'yes',
              price: 20.0,
            },
          ],
          images: [
            'https://i.pinimg.com/originals/df/c7/4b/dfc74b6867617fc8220fddb0efc9d916.jpg',
          ],
        },
        {
          id: 'd',
          name: 'Nozomi is waifu',
          variants: [
            {
              id: 'v4',
              name: 'Nozomi',
              price: 21.99,
            },
          ],
          images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDX-YSwROnfQPdcDObZK-8Hh9TO5eo2oiHCg&usqp=CAU',
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
