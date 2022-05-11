import { Injectable } from '@angular/core';

// This service is used to shorten categories to blurbs
@Injectable({
  providedIn: 'root',
})
export class BlurbService {
  categoryToId: Map<string, string> = new Map<string, string>([
    ['dress', '6276deb5fbc3a8262a1448e3'],
    ['model', '6276deba664188e065aac48c'],
    ['accessories', '6276debd33169090868b0ec6'],
    ['background', '6276debfe2c0e399550e3f8c'],
  ]);

  subcategoryToId: Map<string[], string> = new Map<string[], string>([
    [['dress', 'top'], '6276e19ad8adca914945452b'],
    [['dress', 'pants'], '6276e19ff6ee17c6d0588580'],
    [['dress', 'footwear'], '6276e1a1a2a08dff269dad8f'],
    [['dress', 'underwear'], '6276e1a4142753f1de2bc414'],
    [['model', 'whole-model'], '6276e760a2e6d3b9f72167af'],
    [['model', 'hair'], '6276e191547ce5a4451ba997'],
    [['model', 'face'], '6276e194853d95e5f129867c'],
    [['model', 'body'], '6276e197d37998da92ef62d6'],
    [['accessories', 'tattoos'], '6276e1849bc433f69c0c9274'],
    [['accessories', 'hair-acc'], '6276e1892b1a01f1a0e9cd1d'],
    [['accessories', 'hand-acc'], '6276e18d50227e22ca04bd9b'],
    [['background', 'top'], '6276e17c6f9b80b4dfc39b76'],
    [['background', 'keyboard-mouse'], '6276e17a8b5045e6e89e4cbe'],
    [['background', 'plants'], '6276e1775b88444da7db6f74'],
    [['background', 'other-props'], '6276e1747a6ff946dbf839d1'],
  ]);

  categoryToBlurb: Map<string, string>;
  subcategoryToBlurb: Map<string, string[]>;

  constructor() {
    this.categoryToBlurb = new Map(
      Array.from(this.categoryToId).map(([key, value]) => [value, key])
    );

    this.subcategoryToBlurb = new Map(
      Array.from(this.subcategoryToId).map(([key, value]) => [value, key])
    );
  }

  getCategoryBlurb(categoryId: string): string {
    return this.categoryToBlurb.get(categoryId) ?? '';
  }

  getSubcategoryBlurb(subcategoryId: string): string[] {
    return this.subcategoryToBlurb.get(subcategoryId) ?? ['', ''];
  }

  getCategoryId(category: string): string {
    return this.categoryToId.get(category) ?? '';
  }

  getSubcategoryId(category: string, subcategory: string): string {
    return this.subcategoryToId.get([category, subcategory]) ?? '';
  }
}
