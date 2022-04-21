import { TestBed } from '@angular/core/testing';
import { CommissionsModule, routes } from './commissions.module';

import { CreateRequestComponent } from './create-request/create-request.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { ViewArtistsComponent } from './view-artists/view-artists.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

describe('CommissionsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommissionsModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(CommissionsModule);
    expect(module).toBeTruthy();
  });

  it('should contain route for /', () => {
    const expectedRoute = { path: '', component: SelectViewComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /requests', () => {
    const expectedRoute = { path: 'requests', component: ViewRequestsComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /artists', () => {
    const expectedRoute = { path: 'artists', component: ViewArtistsComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /create-request', () => {
    const expectedRoute = { path: 'create-request', component: CreateRequestComponent };
    expect(routes).toContain(expectedRoute);
  });

});
