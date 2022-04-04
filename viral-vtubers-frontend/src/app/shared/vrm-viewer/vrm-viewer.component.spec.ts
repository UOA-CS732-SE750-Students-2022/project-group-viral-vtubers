import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrmViewerComponent } from './vrm-viewer.component';

describe('VrmViewerComponent', () => {
  let component: VrmViewerComponent;
  let fixture: ComponentFixture<VrmViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrmViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrmViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
