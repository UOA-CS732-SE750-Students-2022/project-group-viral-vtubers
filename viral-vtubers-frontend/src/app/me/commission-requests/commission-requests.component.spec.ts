import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockToastrServiceProvider } from '../../../../test/toastr-service';
import { mockOrderServiceProvider } from '../../services/order.service.mock';
import { CommissionRequestsComponent } from './commission-requests.component';

describe('CommissionRequestsComponent', () => {
  let component: CommissionRequestsComponent;
  let fixture: ComponentFixture<CommissionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommissionRequestsComponent],
      providers: [
        mockRouter(),
        mockOrderServiceProvider({}),
        mockToastrServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
