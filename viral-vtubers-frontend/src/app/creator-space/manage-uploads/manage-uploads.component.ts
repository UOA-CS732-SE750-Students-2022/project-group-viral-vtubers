import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ProductBlurbFragmentFragment } from 'src/schema/type';
@Component({
  selector: 'app-manage-uploads',
  templateUrl: './manage-uploads.component.html',
  styleUrls: ['./manage-uploads.component.scss'],
})
export class ManageUploadsComponent implements OnInit {
  // Drafts don't appear to exist in the backend, leaving empty for now. UI hides drafts section if this is empty.
  drafts: ProductBlurbFragmentFragment[] = [];

  uploads$: Observable<ProductBlurbFragmentFragment[]>;

  constructor(private router: Router, private userService: UserService) {
    this.uploads$ = this.userService.getMyUploadedProducts().uploadedProducts$;
  }

  ngOnInit(): void {}

  nagivateToProduct(id: string) {
    this.router.navigateByUrl(`/products/${id}`);
  }

  editProduct(id: string) {
    this.router.navigateByUrl(`/creator/add-product`, {
      state: { productId: id },
    });
  }
}
