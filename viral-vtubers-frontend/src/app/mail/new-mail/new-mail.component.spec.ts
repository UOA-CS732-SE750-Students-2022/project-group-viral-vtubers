import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockRouter } from '../../../../test/router';
import { mockToastrServiceProvider } from '../../../../test/toastr-service';
import { mockMailServiceProvider } from '../../services/mail.service.mock';
import { mockUserService } from '../../services/user.service.mock';
import { NewMailComponent } from './new-mail.component';

describe('NewMailComponent', () => {
  let component: NewMailComponent;
  let fixture: ComponentFixture<NewMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMailComponent],
      providers: [
        mockMailServiceProvider({}),
        mockUserService(),
        mockToastrServiceProvider({}),
        mockRouter(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
