import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ProductDetailFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  images: GalleryItem[];
  tags: string[];

  productDetails: ProductDetailFragmentFragment;

  constructor() {
    this.productDetails = {
      id: 'product-details1',
      name: 'VRoid Outfit - Raiden Shogun/Genshin Impact',
      numLikes: 82,
      shortDescription: `      ●VRoidの顏(肌・口内)、体(肌)用のテクスチャです。 正式版UVに対応。
      鼻のパーツが複数あるので組み合わせで絵柄を変えることができます。目のパーツは含まれません。(別売り)
      ●使い方 商品画像にも載ってます。 ルック ↓ 影の入り幅-1 影のかたさ1 ●同梱物
      各パーツのPNG 編集用PSD テクスチャ適用済み.vroidファイル
      ●商品画像に使用している素材
      【VRoid正式版】瞳アイライン眉まつげセットナチュラルEye/Eyeline/Eyebrow/Eyelashes
      https://shiratori.booth.pm/items/3575406
      ---------------------------------------
      利用規約はこちら。(必ずお読みください。) Terms of Service.
      https://i25jt2nk.fanbox.cc/posts/2254038
      ---------------------------------------`,
      titleImage:
        'https://c4.wallpaperflare.com/wallpaper/271/809/220/love-live-love-live-series-toujou-nozomi-hd-wallpaper-preview.jpg',
      images: [
        'https://cutewallpaper.org/25/anime-allstars-wallpaper/1072221720.jpg',
        'https://64.media.tumblr.com/fbeb08ea2e6e2460fb84e25d72efbd45/caef0c8ef8568697-55/s1280x1920/26ad216a923e51caf2d3b21a2376d545bde9a49c.png',
        'https://i.pinimg.com/550x/e2/f9/f2/e2f9f28be610382372bff55f759789c4.jpg',
      ],
      subcategory: {
        id: 'subcategory',
        name: 'Gloves',
        category: {
          id: 'category',
          name: 'Accessories',
        },
      },
      artist: {
        id: 'product-artist',
        displayName: 'NozomiSenpai',
        profileImageURI:
          'https://pbs.twimg.com/profile_images/510880770668261376/vdt4yfOx_400x400.png',
        isFollowing: true,
      },
    };
    // Set gallery items array
    this.images = [
      new ImageItem({
        src: this.productDetails.titleImage,
        thumb: this.productDetails.titleImage,
      }),
      ...this.productDetails.images.map((image) => {
        return new ImageItem({ src: image, thumb: image });
      }),
    ];

    this.tags = ['.vrm', '.vroid'];
  }

  ngOnInit(): void {}
}
