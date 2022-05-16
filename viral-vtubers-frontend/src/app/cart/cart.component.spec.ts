import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { mockToastrServiceProvider } from '../../../test/toastr-service';
import { UserFragmentFragment } from '../../schema/type';
import { mockCartServiceProvider } from '../services/cart.service.mock';
import { mockCategoryServiceProvider } from '../services/category.service.mock';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        mockCartServiceProvider({}),
        mockCategoryServiceProvider({
          categories: from([[{ id: 'id' } as UserFragmentFragment]]),
        }),
        mockToastrServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
