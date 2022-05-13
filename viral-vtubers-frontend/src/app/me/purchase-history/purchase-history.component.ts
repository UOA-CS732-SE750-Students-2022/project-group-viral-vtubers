import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { PurchaseFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  purchases$?: Observable<PurchaseFragmentFragment[]>;

  constructor(private router: Router, private cartService: CartService) {
    this.purchases$ = this.cartService.getPurchases().purchases$;
  }

  ngOnInit(): void {}

  navigateToProduct(id: string) {
    this.router.navigateByUrl(`/marketplace/product/${id}`);
  }

  navigateToUser(id: string) {
    this.router.navigateByUrl(`/user/${id}`);
  }
}
