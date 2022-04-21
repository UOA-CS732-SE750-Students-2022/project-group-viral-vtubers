import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ViewArtistsComponent } from './view-artists/view-artists.component';
import { SelectViewComponent } from './select-view/select-view.component';

const routes:Routes = [
  {path: 'view-requests', component: ViewRequestsComponent}
];

@NgModule({
  declarations: [
    ViewRequestsComponent,
    ViewArtistsComponent,
    SelectViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommissionsModule { }
