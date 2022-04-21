import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VrmViewerComponent } from './shared/vrm-viewer/vrm-viewer.component';

const routes: Routes = [
  {
    path: 'vrm-viewer',
    component: VrmViewerComponent,
  },
  {
    path: 'commissions',
    loadChildren: () => import('./commissions/commissions.module').then(m => m.CommissionsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
