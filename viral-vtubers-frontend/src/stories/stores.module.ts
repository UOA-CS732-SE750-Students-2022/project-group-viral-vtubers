import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ButtonComponent from './button.component';
import HeaderComponent from './header.component';
import PageComponent from './page.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, PageComponent],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
