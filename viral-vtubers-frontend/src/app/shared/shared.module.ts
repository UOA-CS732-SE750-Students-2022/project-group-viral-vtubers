import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgtCanvasModule } from '@angular-three/core';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { TagsComponent } from './components/tags/tags.component';
import { VrmCanvasComponent } from './components/vrm-canvas/vrm-canvas.component';
import { VrmViewerComponent } from './vrm-viewer/vrm-viewer.component';

@NgModule({
  declarations: [
    VrmViewerComponent,
    FooterComponent,
    NavbarComponent,
    TagsComponent,
    ProductsGridComponent,
    VrmCanvasComponent,
  ],
  imports: [CommonModule, NgtCanvasModule],
  exports: [
    VrmViewerComponent,
    NavbarComponent,
    TagsComponent,
    FooterComponent,
    ProductsGridComponent,
  ],
})
export class SharedModule {}
