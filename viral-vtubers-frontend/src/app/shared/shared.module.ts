import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { TagsComponent } from './components/tags/tags.component';
import { VrmCanvasComponent } from './components/vrm-canvas/vrm-canvas.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    TagsComponent,
    ProductsGridComponent,
    VrmCanvasComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    TagsComponent,
    FooterComponent,
    ProductsGridComponent,
    VrmCanvasComponent,
  ],
})
export class SharedModule {}
