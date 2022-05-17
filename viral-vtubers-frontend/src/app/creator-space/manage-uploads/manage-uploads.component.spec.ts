import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockProductService } from '../../services/product.service.mock';
import { ManageUploadsComponent } from './manage-uploads.component';

describe('ManageUploadsComponent', () => {
  let component: ManageUploadsComponent;
  let fixture: ComponentFixture<ManageUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageUploadsComponent],
      providers: [mockRouter(), mockProductService()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
