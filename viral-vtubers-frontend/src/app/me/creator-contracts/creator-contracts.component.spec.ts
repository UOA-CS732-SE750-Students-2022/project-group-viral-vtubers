import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorContractsComponent } from './creator-contracts.component';

describe('CreatorContractsComponent', () => {
  let component: CreatorContractsComponent;
  let fixture: ComponentFixture<CreatorContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
