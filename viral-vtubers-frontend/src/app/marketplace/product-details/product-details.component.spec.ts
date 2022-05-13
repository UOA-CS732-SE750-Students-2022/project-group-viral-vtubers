import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockProductService } from '../../services/product.service.mock';
import { mockUserService } from '../../services/user.service.mock';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        mockProductService(),
        mockUserService(),
        mockActivatedRoute(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
