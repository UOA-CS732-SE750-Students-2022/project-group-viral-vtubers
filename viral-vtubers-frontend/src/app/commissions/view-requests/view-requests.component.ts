import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import {
  OrderFragmentFragment,
  OrderPaginationFragmentFragment,
} from 'src/schema/type';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ViewRequestsComponent implements OnInit {
  requests$: Observable<OrderPaginationFragmentFragment>;

  selectedOrder?: OrderFragmentFragment;
  constructor(private router: Router, private orderService: OrderService) {
    this.requests$ = orderService.getAllOrders().allOrders$;
  }

  ngOnInit(): void {}

  navigateToUser(id: string) {
    this.router.navigateByUrl('/user/' + id);
  }

  setSelectedOrder(order?: OrderFragmentFragment) {
    this.selectedOrder = order;
  }

  async apply(event: Event, commissionId: string): Promise<void> {
    event.preventDefault();
    await firstValueFrom(this.orderService.applyOrder(commissionId));
    this.selectedOrder = undefined;
    alert('Thank you for Applying, pls wait');
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
