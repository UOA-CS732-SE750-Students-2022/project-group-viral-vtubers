import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule } from 'ng-gallery';

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
  imports: [CommonModule, GalleryModule, RouterModule.forChild(routes)],
})
export class MarketplaceModule {}
