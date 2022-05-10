import { TestBed } from '@angular/core/testing';

import { AccountComponent } from './account/account.component';
import { CommissionRequestsComponent } from './commission-requests/commission-requests.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MeModule, routes } from './me.module';

describe('MeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MeModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(MeModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /', () => {
    const expectedRoute = { path: '', component: AccountComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /orders', () => {
    const expectedRoute = {
      path: 'orders',
      component: CommissionRequestsComponent,
    };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /favourites', () => {
    const expectedRoute = {
      path: 'favourites',
      component: FavouritesComponent,
    };
    expect(routes).toContain(expectedRoute);
  });
});
