import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUploadsComponent } from './manage-uploads.component';

describe('ManageUploadsComponent', () => {
  let component: ManageUploadsComponent;
  let fixture: ComponentFixture<ManageUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUploadsComponent ]
    })
    .compileComponents();
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
