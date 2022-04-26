import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateRequestComponent } from './create-request/create-request.component';
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
    CreateRequestComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CommissionsModule {}
