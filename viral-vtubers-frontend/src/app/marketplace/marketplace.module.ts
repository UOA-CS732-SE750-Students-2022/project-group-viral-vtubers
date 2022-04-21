import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
  {
    path: '',
    component: ProductsComponent,
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketplaceModule { }
