import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MeComponent } from './me.component';

describe('MeComponent', () => {
  let component: MeComponent;
  let fixture: ComponentFixture<MeComponent>;
  let router: Router;

  beforeEach(async () => {
    router = {
      url: 'foo@bar',
      events: {
        subscribe: () => {},
      },
    } as Router;
    await TestBed.configureTestingModule({
      declarations: [MeComponent],
      providers: [{ provide: Router, useValue: router }],
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
