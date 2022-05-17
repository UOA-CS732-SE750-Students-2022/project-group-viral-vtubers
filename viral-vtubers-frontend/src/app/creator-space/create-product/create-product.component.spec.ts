import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockRouter } from '../../../../test/router';
import { mockToastrServiceProvider } from '../../../../test/toastr-service';
import { mockCategoryServiceProvider } from '../../services/category.service.mock';
import { mockProductService } from '../../services/product.service.mock';
import { mockUploadServiceProvider } from '../../services/upload.service.mock';
import { mockUserService } from '../../services/user.service.mock';
import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      imports: [NoopAnimationsModule],
      providers: [
        mockCategoryServiceProvider({}),
        mockUploadServiceProvider({}),
        mockProductService(),
        mockUserService(),
        mockToastrServiceProvider({}),
        mockRouter(),
        mockActivatedRoute(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
