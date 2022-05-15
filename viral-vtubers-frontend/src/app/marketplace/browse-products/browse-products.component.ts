import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeContext, LabelType, Options } from '@angular-slider/ngx-slider';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { BlurbService } from 'src/app/shared/blurb/blurb.service';
import {
  AgeRestrictionEnum,
  ProductBlurbFragmentFragment,
  ProductFilter,
  ProductSort,
  SortEnum,
} from 'src/schema/type';

@Component({
  selector: 'app-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BrowseProductsComponent implements OnInit {
  products$?: Observable<ProductBlurbFragmentFragment[]>;

  minValue = 0;
  maxValue = 800;
  options: Options = {
    floor: 0,
    ceil: 800,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b> $' + value;
        case LabelType.High:
          return '<b>Max:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };

  sortOptions: selectItem[] = [
    { id: 'newest', name: 'Time added (newest) ' },
    { id: 'oldest', name: 'Time added (oldest) ' },
    { id: 'price', name: 'Price (lowest to highest) ' },
    { id: 'price-reverse', name: 'Price (highest to lowest) ' },
    { id: 'likes', name: 'Likes (popular) ' },
    { id: 'likes-reverse', name: 'Likes (least popular) ' },
    { id: 'name', name: 'Name (ASC) ' },
    { id: 'name-reverse', name: 'Name (DESC) ' },
  ];
  selectedSortOption: selectItem = this.sortOptions[0];

  title = 'All Products';

  categoryFilters: selectCategoryItem[] = [
    {
      id: 'all',
      name: 'All',
      subcategories: [
        {
          id: 'none',
          name: 'None',
        },
      ],
    },
    {
      id: '6276deb5fbc3a8262a1448e3',
      name: 'Dress',
      subcategories: [
        {
          id: 'all',
          name: 'All',
        },
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
          id: 'all',
          name: 'All',
        },
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
          id: 'all',
          name: 'All',
        },
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
          id: 'all',
          name: 'All',
        },
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
          name: 'Other Props',
        },
      ],
    },
  ];
  selectedCategoryFilter: selectCategoryItem = this.categoryFilters[0];
  selectedSubCategoryFilter: selectSubcategoryItem =
    this.selectedCategoryFilter.subcategories[0];

  ageRestrictionFilters: selectItem[] = [
    { id: 'all', name: 'All' },
    { id: 'adult', name: 'Adult only' },
    { id: 'sfw', name: 'SFW only' },
  ];
  selectedAgeRestrictionFilter: selectItem = this.ageRestrictionFilters[0];

  categoryBlurb?: string;
  subcategoryBlurb?: string;
  filter?: ProductFilter;
  sort?: ProductSort;

  constructor(
    private productService: ProductService,
    private blurbService: BlurbService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.categoryBlurb = params.get('categoryBlurb') ?? undefined;
      this.subcategoryBlurb = params.get('subcategoryBlurb') ?? undefined;

      if (this.categoryBlurb) {
        const categoryId = blurbService.getCategoryId(this.categoryBlurb);
        const categoryFilter = this.categoryFilters.find(
          (category) => category.id === categoryId
        );
        if (!categoryFilter) {
          this.categoryBlurb = undefined;
          this.getProducts(this.categoryBlurb, this.subcategoryBlurb);
          return;
        }
        this.selectedCategoryFilter = categoryFilter;
        this.selectedSubCategoryFilter = categoryFilter.subcategories[0];
      }

      if (this.categoryBlurb && this.subcategoryBlurb) {
        const categoryId = blurbService.getCategoryId(this.categoryBlurb);
        const subcategoryId = blurbService.getSubcategoryId(
          this.categoryBlurb,
          this.subcategoryBlurb
        );
        const categoryFilter = this.categoryFilters.find(
          (category) => category.id === categoryId
        );
        if (!categoryFilter) {
          this.categoryBlurb = undefined;
          this.getProducts(this.categoryBlurb, this.subcategoryBlurb);
          return;
        }
        const subcategoryFilter = categoryFilter.subcategories.find(
          (subcategory) => subcategory.id === subcategoryId
        );
        if (!subcategoryFilter) {
          this.subcategoryBlurb = undefined;
          this.getProducts(this.categoryBlurb, this.subcategoryBlurb);
          return;
        }

        this.selectedSubCategoryFilter = subcategoryFilter;
      }

      this.getProducts(this.categoryBlurb, this.subcategoryBlurb);
    });

    this.router.events.subscribe(this.updatePageTitle);
  }

  updatePageTitle = () => {
    if (this.selectedCategoryFilter.id !== 'all') {
      let newTitle = this.selectedCategoryFilter.name;

      if (this.selectedSubCategoryFilter.id !== 'all') {
        newTitle += ' > ' + this.selectedSubCategoryFilter.name;
      }

      this.title = newTitle;
    }
  };

  getProducts(
    categoryBlurb?: string,
    subcategoryBlurb?: string,
    filter?: ProductFilter,
    sort?: ProductSort,
    cursor?: string,
    limit?: number
  ): void {
    if ((!categoryBlurb || categoryBlurb == 'all') && !subcategoryBlurb) {
      const products = this.productService.getProducts(
        filter,
        sort,
        cursor,
        limit
      );
      this.products$ = products.products$.pipe(
        map((p) => p.edges.map((e) => e.node))
      );
      return;
    }
    if (categoryBlurb && !subcategoryBlurb) {
      const productsCategory = this.productService.getProductsCategory(
        this.blurbService.getCategoryId(categoryBlurb),
        filter,
        sort,
        cursor,
        limit
      );
      this.products$ = productsCategory.products$.pipe(
        map((p) => p.edges.map((e) => e.node))
      );
      return;
    }
    if (subcategoryBlurb && categoryBlurb) {
      const productsSubCategory = this.productService.getProductsSubcategory(
        this.blurbService.getSubcategoryId(categoryBlurb, subcategoryBlurb),
        filter,
        sort,
        cursor,
        limit
      );
      this.products$ = productsSubCategory.products$.pipe(
        map((p) => p.edges.map((e) => e.node))
      );
      return;
    }
  }

  ngOnInit(): void {
    this.updatePageTitle();
  }

  onSortChange(sort: selectItem) {
    const productSort: ProductSort = {};

    switch (sort.id) {
      case 'newest':
        productSort.createdDate = SortEnum.Desc;
        break;
      case 'oldest':
        productSort.createdDate = SortEnum.Asc;
        break;
      case 'price':
        productSort.price = SortEnum.Asc;
        break;
      case 'price-desc':
        productSort.price = SortEnum.Desc;
        break;
      case 'name':
        productSort.name = SortEnum.Asc;
        break;
      case 'name-desc':
        productSort.name = SortEnum.Desc;
        break;
      case 'likes':
        productSort.numLikes = SortEnum.Desc;
        break;
      case 'likes-desc':
        productSort.numLikes = SortEnum.Asc;
        break;
    }

    this.sort = productSort;
    this.getProducts(
      this.categoryBlurb,
      this.subcategoryBlurb,
      this.filter,
      this.sort
    );
  }

  onCategoryFiltersChange(selectCategoryItem: selectCategoryItem) {
    this.selectedSubCategoryFilter = selectCategoryItem.subcategories[0];

    if (this.selectedCategoryFilter.id == '') {
      this.router.navigate(['/marketplace', 'all']);
      return;
    }

    const categoryBlurb = this.blurbService.getCategoryBlurb(
      this.selectedCategoryFilter.id
    );
    this.router.navigate(['/marketplace', categoryBlurb]);
  }

  onSubcategoryFiltersChange(subcategory: selectSubcategoryItem) {
    this.router.navigate([
      '/marketplace',
      this.blurbService.getCategoryBlurb(this.selectedCategoryFilter.id),
      this.blurbService.getSubcategoryBlurb(subcategory.id)[1],
    ]);
  }

  onAgeRestrictionFiltersChange(ageRestriction: selectItem) {
    const filter: ProductFilter = this.filter ?? {};

    switch (ageRestriction.id) {
      case 'adult':
        filter.ageRestriction = AgeRestrictionEnum.NsfwOnly;
        break;
      case 'sfw':
        filter.ageRestriction = AgeRestrictionEnum.SfwOnly;
        break;
      case 'all':
        filter.ageRestriction = undefined;
    }

    this.filter = filter;
    this.getProducts(
      this.categoryBlurb,
      this.subcategoryBlurb,
      this.filter,
      this.sort
    );
  }

  onPriceChange(price: ChangeContext) {
    const filter: ProductFilter = this.filter ?? {};

    filter.minPrice = price.value;
    filter.maxPrice = price.highValue;

    this.filter = filter;
    this.getProducts(
      this.categoryBlurb,
      this.subcategoryBlurb,
      this.filter,
      this.sort
    );
  }

  resetFilters() {
    this.selectedCategoryFilter = this.categoryFilters[0];
    this.selectedSubCategoryFilter =
      this.selectedCategoryFilter.subcategories[0];
    this.selectedAgeRestrictionFilter = this.ageRestrictionFilters[0];
    this.minValue = 0;
    this.maxValue = 800;
    this.router.navigate(['/marketplace', 'all']);
  }
}

interface selectCategoryItem {
  id: string;
  name: string;
  subcategories: selectSubcategoryItem[];
}

interface selectSubcategoryItem {
  id: string;
  name: string;
}

interface selectItem {
  id: string;
  name: string;
}
