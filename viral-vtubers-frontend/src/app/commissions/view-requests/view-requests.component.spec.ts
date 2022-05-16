import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockToastrServiceProvider } from '../../../../test/toastr-service';
import { mockOrderServiceProvider } from '../../services/order.service.mock';
import { mockUserService } from '../../services/user.service.mock';
import { ViewRequestsComponent } from './view-requests.component';

describe('ViewRequestsComponent', () => {
  let component: ViewRequestsComponent;
  let fixture: ComponentFixture<ViewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRequestsComponent],
      providers: [
        mockRouter(),
        mockUserService(),
        mockToastrServiceProvider({}),
        mockUserService(),
        mockOrderServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
