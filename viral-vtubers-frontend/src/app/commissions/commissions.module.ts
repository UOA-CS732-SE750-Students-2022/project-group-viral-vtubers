import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CreateRequestComponent } from '../me/create-request/create-request.component';
import { SharedModule } from '../shared/shared.module';
import { SelectViewComponent } from './select-view/select-view.component';
import { ViewArtistsComponent } from './view-artists/view-artists.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

export const routes: Routes = [
  { path: '', component: SelectViewComponent },
  { path: 'requests', component: ViewRequestsComponent },
  { path: 'artists', component: ViewArtistsComponent },
  { path: 'create-request', component: CreateRequestComponent },
];

@NgModule({
  declarations: [
    ViewRequestsComponent,
    ViewArtistsComponent,
    SelectViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CommissionsModule {}
