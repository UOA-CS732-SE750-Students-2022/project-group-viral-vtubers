import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GalleryModule } from 'ng-gallery';

import { SharedModule } from '../shared/shared.module';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: BrowseProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [BrowseProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    GalleryModule,
    NgxSliderModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MarketplaceModule {}
