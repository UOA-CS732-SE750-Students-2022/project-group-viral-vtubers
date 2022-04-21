import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ViewArtistsComponent } from './view-artists/view-artists.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { CreateRequestComponent } from './create-request/create-request.component';

const routes: Routes = [
  {path: '', component: SelectViewComponent},
  {path: 'requests', component: ViewRequestsComponent},
  {path: 'artists', component: ViewArtistsComponent},
  {path: 'create-request', component: CreateRequestComponent},
];

@NgModule({
  declarations: [
    ViewRequestsComponent,
    ViewArtistsComponent,
    SelectViewComponent,
    CreateRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommissionsModule { }
