import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { OrderPaginationFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss'],
})
export class ViewRequestsComponent implements OnInit {
  public requests$: Observable<OrderPaginationFragmentFragment>;
  constructor(private orderService: OrderService) {
    this.requests$ = orderService.getAllOrders().allOrders$;
  }

  ngOnInit(): void {}

  apply(event: Event, commissionId: string): void {
    event.preventDefault();
    this.orderService.applyOrder(commissionId).subscribe();
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
