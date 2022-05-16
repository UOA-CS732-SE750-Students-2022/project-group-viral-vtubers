import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../../../../test/activated-route';
import { VrmCanvasComponent } from './vrm-canvas.component';

describe('VrmCanvasComponent', () => {
  let component: VrmCanvasComponent;
  let fixture: ComponentFixture<VrmCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrmCanvasComponent],
      providers: [mockActivatedRoute()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrmCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
