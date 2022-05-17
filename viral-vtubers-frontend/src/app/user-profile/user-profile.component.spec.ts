import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../../test/activated-route';
import { mockToastrServiceProvider } from '../../../test/toastr-service';
import { mockProductService } from '../services/product.service.mock';
import { mockUploadServiceProvider } from '../services/upload.service.mock';
import { mockUserService } from '../services/user.service.mock';
import { mockAuthService } from '../shared/auth/auth.service.mock';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      providers: [
        mockActivatedRoute(),
        mockUserService(),
        mockAuthService(),
        mockProductService(),
        mockUploadServiceProvider({}),
        mockToastrServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
