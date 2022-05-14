import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  ProductBlurbFragmentFragment,
  ProductPaginationFragmentFragment,
} from 'src/schema/type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  products$?: Observable<ProductBlurbFragmentFragment[]>;

  constructor(private router: Router, private productService: ProductService) {
    this.products$ = this.productService
      .getProducts(undefined, undefined, undefined, 6)
      .products$.pipe(map((p) => p.edges.map((e) => e.node)));
  }

  ngOnInit(): void {}
}
