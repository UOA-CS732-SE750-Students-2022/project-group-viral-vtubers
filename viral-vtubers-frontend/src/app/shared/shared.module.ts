import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { TagsComponent } from './components/tags/tags.component';
import { VrmCanvasComponent } from './components/vrm-canvas/vrm-canvas.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    TagsComponent,
    ProductsGridComponent,
    VrmCanvasComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    TagsComponent,
    FooterComponent,
    ProductsGridComponent,
    VrmCanvasComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
