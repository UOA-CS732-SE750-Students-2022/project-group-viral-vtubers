import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailComponent } from './sent-mail.component';

describe('SentMailComponent', () => {
  let component: SentMailComponent;
  let fixture: ComponentFixture<SentMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
