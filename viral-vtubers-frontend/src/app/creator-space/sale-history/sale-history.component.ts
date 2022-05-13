import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { SaleFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.scss'],
})
export class SaleHistoryComponent implements OnInit {
  sales$: Observable<SaleFragmentFragment[]>;

  constructor(private cartService: CartService) {
    this.sales$ = cartService.getSales().sales$;
  }

  ngOnInit(): void {}

  toDate(date: string) {
    return moment(date).format('DD-MM-YYYY h:mm a');
  }
}
