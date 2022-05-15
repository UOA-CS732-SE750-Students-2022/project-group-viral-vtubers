import { TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product/create-product.component';
import { CreatorSpaceModule, routes } from './creator-space.module';
import { ManageCommissionsComponent } from './manage-commissions/manage-commissions.component';
import { ManageUploadsComponent } from './manage-uploads/manage-uploads.component';

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
      path: 'add-product',
      component: CreateProductComponent,
    };
    expect(routes.find((r) => r.path === '')?.children).toContain(
      expectedRoute
    );
  });

  it('should contain route for /', () => {
    const expectedRoute = {
      path: '',
      component: ManageUploadsComponent,
    };
    expect(routes.find((r) => r.path === '')?.children).toContain(
      expectedRoute
    );
  });

  it('should contain route for /commissions', () => {
    const expectedRoute = {
      path: 'commissions',
      component: ManageCommissionsComponent,
    };
    expect(routes.find((r) => r.path === '')?.children).toContain(
      expectedRoute
    );
  });
});
