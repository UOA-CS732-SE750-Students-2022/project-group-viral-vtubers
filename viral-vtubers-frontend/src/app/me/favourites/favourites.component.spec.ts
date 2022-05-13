import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockUserService } from '../../services/user.service.mock';
import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      providers: [mockUserService(), mockActivatedRoute()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
