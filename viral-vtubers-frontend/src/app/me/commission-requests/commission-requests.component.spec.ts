import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionRequestsComponent } from './commission-requests.component';

describe('CommissionRequestsComponent', () => {
  let component: CommissionRequestsComponent;
  let fixture: ComponentFixture<CommissionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
