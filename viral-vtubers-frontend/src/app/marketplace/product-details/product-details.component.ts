import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  images: GalleryItem[];
  tags: string[];

  constructor() {
    // Set gallery items array
    this.images = [
      new ImageItem({
        src: 'https://c4.wallpaperflare.com/wallpaper/271/809/220/love-live-love-live-series-toujou-nozomi-hd-wallpaper-preview.jpg',
        thumb:
          'https://c4.wallpaperflare.com/wallpaper/271/809/220/love-live-love-live-series-toujou-nozomi-hd-wallpaper-preview.jpg',
      }),
      new ImageItem({
        src: 'https://cutewallpaper.org/25/anime-allstars-wallpaper/1072221720.jpg',
        thumb:
          'https://cutewallpaper.org/25/anime-allstars-wallpaper/1072221720.jpg',
      }),
      new ImageItem({
        src: 'https://64.media.tumblr.com/fbeb08ea2e6e2460fb84e25d72efbd45/caef0c8ef8568697-55/s1280x1920/26ad216a923e51caf2d3b21a2376d545bde9a49c.png',
        thumb:
          'https://64.media.tumblr.com/fbeb08ea2e6e2460fb84e25d72efbd45/caef0c8ef8568697-55/s1280x1920/26ad216a923e51caf2d3b21a2376d545bde9a49c.png',
      }),
      new ImageItem({
        src: 'https://i.pinimg.com/550x/e2/f9/f2/e2f9f28be610382372bff55f759789c4.jpg',
        thumb:
          'https://i.pinimg.com/550x/e2/f9/f2/e2f9f28be610382372bff55f759789c4.jpg',
      }),
      // ... more items
    ];

    this.tags = ['.vrm', '.vroid'];
  }

  ngOnInit(): void {}
}
