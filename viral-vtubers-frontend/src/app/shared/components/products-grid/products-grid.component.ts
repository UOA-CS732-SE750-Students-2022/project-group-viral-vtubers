import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  @Input()
  public products: Array<ProductBlurbFragmentFragment> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nagivateToProduct(id: string) {
    this.router.navigateByUrl(`marketplace/product/${id}`);
  }
}
