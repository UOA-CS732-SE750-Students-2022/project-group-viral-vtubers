import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../../test/router';
import { mockSearchServiceProvider } from '../../../services/search.service.mock';
import { mockUserService } from '../../../services/user.service.mock';
import { mockAuthService } from '../../auth/auth.service.mock';
import { mockBlurbService } from '../../blurb/blurb.service.mock';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        mockRouter(),
        mockUserService(),
        mockBlurbService(),
        mockAuthService({}),
        mockSearchServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
