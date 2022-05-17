import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockCartServiceProvider } from '../../services/cart.service.mock';
import { PurchaseHistoryComponent } from './purchase-history.component';

describe('PurchaseHistoryComponent', () => {
  let component: PurchaseHistoryComponent;
  let fixture: ComponentFixture<PurchaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseHistoryComponent],
      providers: [mockRouter(), mockCartServiceProvider({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
