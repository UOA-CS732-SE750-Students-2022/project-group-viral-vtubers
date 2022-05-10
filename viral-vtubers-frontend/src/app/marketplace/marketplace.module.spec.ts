import { TestBed } from '@angular/core/testing';

import { MarketplaceModule, routes } from './marketplace.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

describe('MarketplaceModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarketplaceModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(MarketplaceModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /', () => {
    const expectedRoute = { path: '', component: ProductsComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /product/:id', () => {
    const expectedRoute = {
      path: 'product/:id',
      component: ProductDetailsComponent,
    };
    expect(routes).toContain(expectedRoute);
  });
});
