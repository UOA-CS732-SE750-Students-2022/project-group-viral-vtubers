import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TagsComponent } from './components/tags/tags.component';
import { VrmViewerComponent } from './vrm-viewer/vrm-viewer.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';

@NgModule({
  declarations: [
    VrmViewerComponent,
    FooterComponent,
    NavbarComponent,
    TagsComponent,
    ProductsGridComponent,
  ],
  imports: [CommonModule],
  exports: [
    VrmViewerComponent,
    NavbarComponent,
    TagsComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
