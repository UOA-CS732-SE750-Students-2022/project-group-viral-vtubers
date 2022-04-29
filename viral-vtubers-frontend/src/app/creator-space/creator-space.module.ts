import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
  {
    path: '',
    component: CreateProductComponent,
    children: [
      {
        path: 'create-product',
        component: CreateProductComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [CreateProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CreatorSpaceModule {}
