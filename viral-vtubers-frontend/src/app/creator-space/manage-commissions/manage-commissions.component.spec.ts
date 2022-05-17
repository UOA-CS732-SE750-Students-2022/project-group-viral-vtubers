import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockOrderServiceProvider } from '../../services/order.service.mock';
import { ManageCommissionsComponent } from './manage-commissions.component';

describe('ManageCommissionsComponent', () => {
  let component: ManageCommissionsComponent;
  let fixture: ComponentFixture<ManageCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageCommissionsComponent],
      providers: [mockRouter(), mockOrderServiceProvider({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
