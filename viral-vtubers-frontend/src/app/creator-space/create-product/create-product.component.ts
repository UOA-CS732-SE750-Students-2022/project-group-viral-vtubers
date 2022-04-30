import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CreateProductComponent implements OnInit {
  changePopup = false;
  selectedCategory?: any;
  selectedSubCategory?: any;
  images = [
    'https://picsum.photos/200?1',
    'https://picsum.photos/200?2',
    'https://picsum.photos/200?3',
    'https://picsum.photos/200?4',
  ];

  variants = [
    {
      name: '12',
      fileTypes: ['.vrm', '.vroid'],
      price: '12.99',
    },
  ];

  categories = [
    {
      id: 1,
      name: 'Clothes',
      subcategories: [
        {
          id: 1,
          name: 'T-Shirts',
        },
        {
          id: 2,
          name: 'Shirts',
        },
        {
          id: 3,
          name: 'Pants',
        },
      ],
    },
    {
      id: 2,
      name: 'Accessories',
      subcategories: [
        {
          id: 1,
          name: 'Hats',
        },
        {
          id: 2,
          name: 'Gloves',
        },
        {
          id: 3,
          name: 'Bags',
        },
      ],
    },
  ];

  constructor() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  getAllCategories(): any {
    return this.categories;
  }

  changeCategory(category: any): void {
    this.selectedSubCategory = category;
    this.hideChange();
  }

  showChange(): void {
    this.changePopup = true;
  }

  hideChange(): void {
    this.changePopup = false;
  }

  openCategory(category: any): void {
    if (this.selectedCategory?.id === category.id) {
      this.selectedCategory = null;
      return;
    }
    this.selectedCategory = category;
  }

  removeImage(image: String): void {
    this.images = this.images.filter((i) => i !== image);
  }

  addVariant(): void {
    this.variants.push({
      name: '',
      fileTypes: ['.vrm', '.vroid'],
      price: '12.99',
    });
  }

  removeVariantIndex(i: number) {
    console.log(i);
    this.variants.splice(i, 1);
  }

  ngOnInit(): void {}
}
