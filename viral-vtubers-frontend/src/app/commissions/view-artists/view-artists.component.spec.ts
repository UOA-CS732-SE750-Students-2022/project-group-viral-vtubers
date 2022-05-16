import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockUserService } from '../../services/user.service.mock';
import { ViewArtistsComponent } from './view-artists.component';

describe('ViewArtistsComponent', () => {
  let component: ViewArtistsComponent;
  let fixture: ComponentFixture<ViewArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewArtistsComponent],
      providers: [mockUserService()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
