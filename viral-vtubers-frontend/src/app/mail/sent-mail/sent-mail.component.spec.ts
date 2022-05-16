import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockMailServiceProvider } from '../../services/mail.service.mock';
import { SentMailComponent } from './sent-mail.component';

describe('SentMailComponent', () => {
  let component: SentMailComponent;
  let fixture: ComponentFixture<SentMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentMailComponent],
      providers: [mockMailServiceProvider({})],
    }).compileComponents();
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
