import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public firstCategory = 'dress';

  @ViewChild('marketplace') marketplaceRef!: ElementRef;
  @ViewChild('dropdown') dropdownRef!: ElementRef;

  // Categories
  @ViewChild('dress') dressRef!: ElementRef;
  @ViewChild('wholeModels') wholeModelsRef!: ElementRef;
  @ViewChild('accessories') accessoriesRef!: ElementRef;
  @ViewChild('backgrounds') backgroundsRef!: ElementRef;
  @ViewChildren('category') categories!: ElementRef[];
  @ViewChild('subcategories') subcategoriesRef!: ElementRef;
  @ViewChild('otherCategories') otherCategoriesRef!: ElementRef;

  constructor() {}

  marketplaceShow() {
    console.log('show');
    this.dropdownRef.nativeElement.style.visibility = 'visible';
    this.dropdownRef.nativeElement.style.opacity = '0.9';
    this.dressRef.nativeElement.style.backgroundColor = undefined;
  }

  categoryDress() {
    this.selectCategory('dress');
  }

  categoryWholeModels() {
    this.selectCategory('whole models');
  }

  categoryAccessories() {
    this.selectCategory('accessories');
  }

  categoryBackgrounds() {
    this.selectCategory('backgrounds');
  }

  selectCategory(category: string) {
    this.hideCategories();
    this.dressRef.nativeElement.style.visibility = 'visible';
    this.dressRef.nativeElement.style.opacity = '1';
    this.dressRef.nativeElement.style.backgroundColor = '#dddddd';
    this.firstCategory = category;
    this.showSubcategories();
    this.dressRef.nativeElement.style.display = 'block';
  }

  hideCategories() {
    this.dressRef.nativeElement.style.visibility = 'hidden';
    this.wholeModelsRef.nativeElement.style.visibility = 'hidden';
    this.accessoriesRef.nativeElement.style.visibility = 'hidden';
    this.backgroundsRef.nativeElement.style.visibility = 'hidden';
    this.categories.map((category) => {
      category.nativeElement.style.opacity = '0';
    });
  }

  showCategories() {
    this.dressRef.nativeElement.style.visibility = 'visible';
    this.wholeModelsRef.nativeElement.style.visibility = 'visible';
    this.accessoriesRef.nativeElement.style.visibility = 'visible';
    this.backgroundsRef.nativeElement.style.visibility = 'visible';
    this.categories.map((category) => {
      category.nativeElement.style.opacity = '1';
    });
    this.firstCategory = 'dress';
  }

  showSubcategories() {
    this.subcategoriesRef.nativeElement.style.visibility = 'visible';
    this.subcategoriesRef.nativeElement.style.opacity = '1';

    this.subcategoriesRef.nativeElement.style.display = 'block';

    this.dressRef.nativeElement.style.display = 'none';
    this.wholeModelsRef.nativeElement.style.display = 'none';
    this.accessoriesRef.nativeElement.style.display = 'none';
    this.backgroundsRef.nativeElement.style.display = 'none';
  }

  hideSubcategories() {
    this.subcategoriesRef.nativeElement.style.visibility = 'hidden';
    this.subcategoriesRef.nativeElement.style.opacity = '0';

    this.subcategoriesRef.nativeElement.style.display = 'none';

    this.dressRef.nativeElement.style.display = 'block';
    this.wholeModelsRef.nativeElement.style.display = 'block';
    this.accessoriesRef.nativeElement.style.display = 'block';
    this.backgroundsRef.nativeElement.style.display = 'block';
  }

  async marketplaceHide() {
    this.hideSubcategories();
    console.log('hide');
    this.dropdownRef.nativeElement.style.opacity = '0';
    this.dropdownRef.nativeElement.style.visibility = 'hidden';
    this.showCategories();
    this.dressRef.nativeElement.style.backgroundColor = null;
  }

  ngOnInit(): void {}
}
