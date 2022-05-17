import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockRouter } from '../../../../test/router';
import { mockToastrServiceProvider } from '../../../../test/toastr-service';
import { mockCategoryServiceProvider } from '../../services/category.service.mock';
import { mockOrderServiceProvider } from '../../services/order.service.mock';
import { mockProductService } from '../../services/product.service.mock';
import { mockUploadServiceProvider } from '../../services/upload.service.mock';
import { CreateRequestComponent } from './create-request.component';

describe('CreateRequestComponent', () => {
  let component: CreateRequestComponent;
  let fixture: ComponentFixture<CreateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRequestComponent],
      providers: [
        mockCategoryServiceProvider({}),
        mockProductService(),
        mockOrderServiceProvider({}),
        mockToastrServiceProvider({}),
        mockRouter(),
        mockActivatedRoute(),
        mockUploadServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
