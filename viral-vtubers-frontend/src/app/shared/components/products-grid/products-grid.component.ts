import { Component, Input, OnInit } from '@angular/core';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  @Input()
  public products: Array<ProductBlurbFragmentFragment> = [];

  constructor() {}

  ngOnInit(): void {}
}
