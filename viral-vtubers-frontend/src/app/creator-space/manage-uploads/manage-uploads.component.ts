import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductBlurbFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-manage-uploads',
  templateUrl: './manage-uploads.component.html',
  styleUrls: ['./manage-uploads.component.scss'],
})
export class ManageUploadsComponent implements OnInit {
  drafts$: Observable<ProductBlurbFragmentFragment[]>;

  uploads$: Observable<ProductBlurbFragmentFragment[]>;

  constructor(private router: Router, private productService: ProductService) {
    this.drafts$ = this.productService
      .getProducts()
      .products$.pipe(
        map((products) =>
          products.edges
            .filter((product) => product.node.isDraft)
            .map((product) => product.node)
        )
      );

    this.uploads$ = this.productService
      .getProducts()
      .products$.pipe(
        map((products) =>
          products.edges
            .filter((product) => !product.node.isDraft)
            .map((product) => product.node)
        )
      );
  }

  ngOnInit(): void {}

  editProduct(id: string) {
    this.router.navigateByUrl(`/creator/edit-product/` + id);
  }
}
