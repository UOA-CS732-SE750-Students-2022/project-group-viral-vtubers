import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloModule } from 'apollo-angular';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockRouter } from '../../../../test/router';
import { mockProductService } from '../../services/product.service.mock';
import { BrowseProductsComponent } from './browse-products.component';

describe('BrowseProductsComponent', () => {
  let component: BrowseProductsComponent;
  let fixture: ComponentFixture<BrowseProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseProductsComponent],
      imports: [ApolloModule],
      providers: [mockRouter(), mockProductService(), mockActivatedRoute()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the title', () => {
    // Prepare
    const TITLE = 'My UWU Product';

    // Check initial state
    expect(
      fixture.nativeElement.querySelector('*[data-test-id="title"]').textContent
    ).not.toContain(TITLE);

    // Change state
    component.title = TITLE;
    fixture.detectChanges();

    // Check end state
    expect(
      fixture.nativeElement.querySelector('*[data-test-id="title"]').textContent
    ).toContain(TITLE);
  });

  [
    'categoryFilters',
    'subCategoryFilters',
    'ageRestrictionFilters',
    'sortOptions',
  ].forEach((filters) => {
    it('should populate category filters ' + filters, () => {
      const FILTERS = [
        {
          id: 'clothing',
          name: 'Clothing',
          subcategories: [{ id: 'none', name: 'name' }],
        },
        {
          id: 'all',
          name: 'All',
          subcategories: [],
        },
      ];

      // Check initial state
      fixture.nativeElement
        .querySelectorAll(
          `*[data-test-id="${filters}"] *[data-test-id="options"]`
        )
        .forEach(
          (c: HTMLElement, i: number) =>
            FILTERS[i] && expect(c.textContent).not.toContain(FILTERS[i].name)
        );

      // Change state
      component.categoryFilters = FILTERS;
      fixture.detectChanges();

      // Check final state
      fixture.nativeElement
        .querySelectorAll('*[data-test-id="options"]')
        .forEach((c: HTMLElement, i: number) =>
          expect(c.textContent).toContain(FILTERS[i].name)
        );
    });
  });
});
