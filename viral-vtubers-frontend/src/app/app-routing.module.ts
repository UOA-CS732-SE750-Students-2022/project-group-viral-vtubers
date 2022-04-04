import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VrmViewerComponent } from './shared/vrm-viewer/vrm-viewer.component';

const routes: Routes = [
  {
    path: 'vrm-viewer',
    component: VrmViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
