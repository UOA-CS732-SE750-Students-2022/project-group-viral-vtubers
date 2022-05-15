import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {
  NotificationFragmentFragment,
  UserFragmentFragment,
} from 'src/schema/type';

import { AuthService } from '../../auth/auth.service';
import { BlurbService } from '../../blurb/blurb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  firstCategory = 'dress';
  firstCategoryBlurb = 'dress';

  isSubcategory = false;

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

  @ViewChildren('subcategory') subcategories!: ElementRef[];

  self$?: Observable<UserFragmentFragment>;
  notification$?: Observable<NotificationFragmentFragment>;
  categoryFilters: CategoryItem[] = [
    {
      id: '6276deb5fbc3a8262a1448e3',
      name: 'Dress',
      subcategories: [
        {
          id: '6276e19ad8adca914945452b',
          name: 'Top',
        },
        {
          id: '6276e19ff6ee17c6d0588580',
          name: 'Pants',
        },
        {
          id: '6276e1a1a2a08dff269dad8f',
          name: 'Footwear',
        },
        {
          id: '6276e1a4142753f1de2bc414',
          name: 'Underwear',
        },
      ],
    },
    {
      id: '6276deba664188e065aac48c',
      name: 'Model',
      subcategories: [
        {
          id: '6276e760a2e6d3b9f72167af',
          name: 'Whole Model',
        },
        {
          id: '6276e760a2e6d3b9f72167af',
          name: 'Hair',
        },
        {
          id: '6276e194853d95e5f129867c',
          name: 'Face',
        },
        {
          id: '6276e197d37998da92ef62d6',
          name: 'Body',
        },
      ],
    },
    {
      id: '6276debd33169090868b0ec6',
      name: 'Accessory',
      subcategories: [
        {
          id: '6276e1849bc433f69c0c9274',
          name: 'Tattoos',
        },
        {
          id: '6276e1892b1a01f1a0e9cd1d',
          name: 'Hair Acc',
        },
        {
          id: '6276e18d50227e22ca04bd9b',
          name: 'Hand Acc',
        },
      ],
    },
    {
      id: '6276debfe2c0e399550e3f8c',
      name: 'Background',
      subcategories: [
        {
          id: '6276e17c6f9b80b4dfc39b76',
          name: 'Top',
        },
        {
          id: '6276e17a8b5045e6e89e4cbe',
          name: 'Keyboard Mouse',
        },
        {
          id: '6276e1775b88444da7db6f74',
          name: 'Plants',
        },
        {
          id: '6276e1747a6ff946dbf839d1',
          name: 'Other',
        },
      ],
    },
  ];

  constructor(
    private blurbService: BlurbService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    if (authService.isLoggedIn) {
      this.self$ = userService.getSelf().self$;
      this.notification$ = userService.getNotification().notification$;
    }

    authService.getUser().subscribe((user) => {
      if (user !== null) {
        this.self$ = userService.getSelf().self$;
      } else {
        this.self$ = undefined;
      }
    });
  }

  marketplaceShow() {
    this.dropdownRef.nativeElement.style.visibility = 'visible';
    this.dropdownRef.nativeElement.style.opacity = '0.9';
    this.dressRef.nativeElement.style.backgroundColor = undefined;
  }

  categoryDress() {
    if (!this.isSubcategory) {
      this.selectCategory(this.categoryFilters[0]);
      return;
    }

    this.router.navigate(['/marketplace', this.firstCategoryBlurb]);
  }

  categoryWholeModels() {
    this.selectCategory(this.categoryFilters[1]);
  }

  categoryAccessories() {
    this.selectCategory(this.categoryFilters[2]);
  }

  categoryBackgrounds() {
    this.selectCategory(this.categoryFilters[3]);
  }

  selectCategory(category: CategoryItem) {
    this.hideCategories();
    this.isSubcategory = true;
    this.dressRef.nativeElement.style.visibility = 'visible';
    this.dressRef.nativeElement.style.opacity = '1';
    this.dressRef.nativeElement.style.backgroundColor = '#dddddd';
    this.firstCategory = category.name.toLowerCase();
    this.firstCategoryBlurb = this.blurbService.getCategoryBlurb(category.id);
    this.showSubcategories();
    this.dressRef.nativeElement.style.display = 'block';

    this.subcategories.forEach((subcategoryRef, index) => {
      if (category.subcategories.length <= index) {
        subcategoryRef.nativeElement.innerText = '';
        subcategoryRef.nativeElement.href = undefined;
        return;
      }
      const sub = category.subcategories[index];
      subcategoryRef.nativeElement.innerText = sub.name.toLowerCase();
      subcategoryRef.nativeElement.href =
        '/marketplace/' +
        this.blurbService.getCategoryBlurb(category.id) +
        '/' +
        this.blurbService.getSubcategoryBlurb(sub.id)[1];
    });
  }

  hideCategories() {
    this.isSubcategory = false;
    this.dressRef.nativeElement.style.visibility = 'hidden';
    this.wholeModelsRef.nativeElement.style.visibility = 'hidden';
    this.accessoriesRef.nativeElement.style.visibility = 'hidden';
    this.backgroundsRef.nativeElement.style.visibility = 'hidden';
    this.categories.map((category) => {
      category.nativeElement.style.opacity = '0';
    });
    this.subcategories.forEach((subcategoryRef) => {
      subcategoryRef.nativeElement.href = undefined;
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
    this.isSubcategory = false;
    this.subcategoriesRef.nativeElement.style.visibility = 'hidden';
    this.subcategoriesRef.nativeElement.style.opacity = '0';

    this.subcategoriesRef.nativeElement.style.display = 'none';

    this.dressRef.nativeElement.style.display = 'block';
    this.wholeModelsRef.nativeElement.style.display = 'block';
    this.accessoriesRef.nativeElement.style.display = 'block';
    this.backgroundsRef.nativeElement.style.display = 'block';

    this.subcategories.forEach((subcategoryRef) => {
      subcategoryRef.nativeElement.href = undefined;
    });
  }

  async marketplaceHide() {
    this.hideSubcategories();
    this.dropdownRef.nativeElement.style.opacity = '0';
    this.dropdownRef.nativeElement.style.visibility = 'hidden';
    this.showCategories();
    this.dressRef.nativeElement.style.backgroundColor = null;
  }

  ngOnInit(): void {}
}

type CategoryItem = {
  id: string;
  name: string;
  subcategories: SubcategoryItem[];
};

type SubcategoryItem = {
  id: string;
  name: string;
};
