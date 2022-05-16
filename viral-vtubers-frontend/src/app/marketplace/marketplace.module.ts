import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GalleryModule } from 'ng-gallery';
import { DisqusModule } from 'ngx-disqus';

import { SharedModule } from '../shared/shared.module';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/marketplace/all/',
    pathMatch: 'full',
  },
  {
    path: ':categoryBlurb',
    redirectTo: '/marketplace/:categoryBlurb/',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: ':categoryBlurb/:subcategoryBlurb',
    component: BrowseProductsComponent,
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
    DisqusModule,
  ],
})
export class MarketplaceModule {}
