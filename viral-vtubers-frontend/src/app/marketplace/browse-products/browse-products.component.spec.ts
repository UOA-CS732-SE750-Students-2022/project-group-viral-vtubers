import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloModule } from 'apollo-angular';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockRouter } from '../../../../test/router';
import { mockProductService } from '../../services/product.service.mock';
import { BrowseProductsComponent } from './browse-products.component';

describe('BrowseProductsComponent', () => {
  let component: BrowseProductsComponent;
  let fixture: ComponentFixture<BrowseProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseProductsComponent],
      imports: [ApolloModule],
      providers: [mockRouter(), mockProductService(), mockActivatedRoute()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
