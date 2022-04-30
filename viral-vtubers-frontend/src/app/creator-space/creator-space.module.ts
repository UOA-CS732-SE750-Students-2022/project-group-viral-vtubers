import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreatorSpaceComponent } from './creator-space.component';
import { ManageCommissionsComponent } from './manage-commissions/manage-commissions.component';
import { ManageUploadsComponent } from './manage-uploads/manage-uploads.component';

export const routes: Routes = [
  {
    path: '',
    component: CreatorSpaceComponent,
    children: [
      {
        path: 'add-product',
        component: CreateProductComponent,
      },
      {
        path: 'uploads',
        component: CreateProductComponent,
      },
      {
        path: 'commissions',
        component: CreateProductComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CreateProductComponent,
    CreatorSpaceComponent,
    ManageUploadsComponent,
    ManageCommissionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    RouterModule.forChild(routes),
  ],
})
export class CreatorSpaceModule {}
