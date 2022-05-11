import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { BlurbService } from 'src/app/shared/blurb/blurb.service';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss'],
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
    { id: 'likes', name: 'Number of likes ' },
  ];
  selectedSortOption: selectItem = this.sortOptions[0];

  title = 'All Products';

  // TODO these are placeholder filter options, replace with real ones when linking.
  categoryFilters: selectItem[] = [
    { id: 'all', name: 'All' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'whole', name: 'Whole Models' },
    { id: 'backgrounds', name: 'Backgrounds' },
  ];
  selectedCategoryFilter: selectItem = this.categoryFilters[0];

  // TODO these are placeholder filter options, replace with real ones when linking.
  subCategoryFilters: selectItem[] = [{ id: 'all', name: 'All' }];
  selectedSubCategoryFilter: selectItem = this.subCategoryFilters[0];

  // TODO these are placeholder filter options, replace with real ones when linking.
  ageRestrictionFilters: selectItem[] = [
    { id: 'all', name: 'All' },
    { id: 'adult', name: 'Adult only' },
    { id: 'sfw', name: 'SFW only' },
  ];
  selectedAgeRestrictionFilter: selectItem = this.ageRestrictionFilters[0];

  constructor(
    private productService: ProductService,
    private blurbService: BlurbService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const categoryBlurb = params.get('categoryBlurb');
      const subcategoryBlurb = params.get('subcategoryBlurb');

      if (!categoryBlurb && !subcategoryBlurb) {
        const products = productService.getProducts();
        this.products$ = products.products$.pipe(
          map((p) => p.edges.map((e) => e.node))
        );
        return;
      }
      if (categoryBlurb && !subcategoryBlurb) {
        const productsCategory = productService.getProductsCategory(
          blurbService.getCategoryId(categoryBlurb)
        );
        this.products$ = productsCategory.products$.pipe(
          map((p) => p.edges.map((e) => e.node))
        );
        return;
      }
      if (subcategoryBlurb && categoryBlurb) {
        const productsSubCategory = productService.getProductsSubcategory(
          blurbService.getSubcategoryId(categoryBlurb, subcategoryBlurb)
        );
        this.products$ = productsSubCategory.products$.pipe(
          map((p) => p.edges.map((e) => e.node))
        );
        return;
      }
    });
  }

  ngOnInit(): void {}

  resetFilters() {
    this.selectedCategoryFilter = this.categoryFilters[0];
    this.selectedSubCategoryFilter = this.subCategoryFilters[0];
    this.selectedAgeRestrictionFilter = this.ageRestrictionFilters[0];
    this.minValue = 0;
    this.maxValue = 800;
  }
}

interface selectItem {
  id: string;
  name: string;
}
