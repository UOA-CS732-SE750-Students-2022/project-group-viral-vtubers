import { TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product/create-product.component';
import { CreatorSpaceModule, routes } from './creator-space.module';

describe('CommissionsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorSpaceModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(CreatorSpaceModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /create-product', () => {
    const expectedRoute = {
      path: 'create-product',
      component: CreateProductComponent,
    };
    expect(routes).toContain(expectedRoute);
  });
});
