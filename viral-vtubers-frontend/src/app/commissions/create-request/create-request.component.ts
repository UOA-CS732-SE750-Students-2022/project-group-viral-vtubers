import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss'],
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
export class CreateRequestComponent implements OnInit {
  public changePopup = false;
  public selectedCategory?: any = {};
  public selectedSubCategory?: any = {};

  constructor() {}

  public categories = [
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

  ngOnInit(): void {}
}
