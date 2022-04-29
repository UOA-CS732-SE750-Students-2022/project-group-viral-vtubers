import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorSpaceComponent } from './creator-space.component';

describe('CreatorSpaceComponent', () => {
  let component: CreatorSpaceComponent;
  let fixture: ComponentFixture<CreatorSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
