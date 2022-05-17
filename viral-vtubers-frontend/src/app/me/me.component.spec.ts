import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../test/router';
import { mockToastrServiceProvider } from '../../../test/toastr-service';
import { mockAuthService } from '../shared/auth/auth.service.mock';
import { MeComponent } from './me.component';

describe('MeComponent', () => {
  let component: MeComponent;
  let fixture: ComponentFixture<MeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeComponent],
      providers: [
        mockRouter(),
        mockAuthService(),
        mockToastrServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
