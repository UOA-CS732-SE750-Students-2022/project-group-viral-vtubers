import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBlurbFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-manage-uploads',
  templateUrl: './manage-uploads.component.html',
  styleUrls: ['./manage-uploads.component.scss'],
})
export class ManageUploadsComponent implements OnInit {
  drafts: ProductBlurbFragmentFragment[];

  uploads: ProductBlurbFragmentFragment[];

  constructor(private router: Router) {
    this.drafts = this.drafts = [
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
        name: '',
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
    ];

    this.uploads = [
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

  nagivateToProduct(id: string) {
    this.router.navigateByUrl(`/products/${id}`);
  }

  editProduct(id: string) {
    this.router.navigateByUrl(`/creator/add-product`, {
      state: { productId: id },
    });
  }
}
