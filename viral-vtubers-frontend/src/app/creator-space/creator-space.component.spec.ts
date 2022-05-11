import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CreatorSpaceComponent } from './creator-space.component';

describe('CreatorSpaceComponent', () => {
  let component: CreatorSpaceComponent;
  let fixture: ComponentFixture<CreatorSpaceComponent>;
  let router: Router;

  beforeEach(async () => {
    router = {
      url: 'foo.bar',
      events: {
        subscribe: () => {},
      },
    } as Router;
    await TestBed.configureTestingModule({
      declarations: [CreatorSpaceComponent],
      providers: [{ provide: Router, useValue: router }],
    }).compileComponents();
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
