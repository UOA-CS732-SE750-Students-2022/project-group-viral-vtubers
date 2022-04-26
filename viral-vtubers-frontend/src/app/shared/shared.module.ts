import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { VrmViewerComponent } from './vrm-viewer/vrm-viewer.component';

@NgModule({
  declarations: [VrmViewerComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
