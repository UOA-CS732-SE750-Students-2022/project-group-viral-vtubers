import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import {
  MyOrdersFragmentFragment,
  OrderFragmentFragment,
  UserFragmentFragment,
} from 'src/schema/type';

@Component({
  selector: 'app-commission-requests',
  templateUrl: './commission-requests.component.html',
  styleUrls: ['./commission-requests.component.scss'],
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
export class CommissionRequestsComponent implements OnInit {
  myOrders$: Observable<MyOrdersFragmentFragment>;

  selectedOrder?: OrderFragmentFragment;

  isComment = false;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private toasterService: ToastrService
  ) {
    this.myOrders$ = this.orderService.myOrders().myOrders$;
  }

  ngOnInit(): void {}

  navigateToUser(id: string) {
    this.router.navigateByUrl('/user/' + id);
  }

  setSelectedOrder(order?: OrderFragmentFragment) {
    this.selectedOrder = order;
    if (order !== undefined) {
      this.isComment = order.isComment;
    }
  }

  handleAcceptApplication(application: UserFragmentFragment) {
    if (!this.selectedOrder) {
      return;
    }
    this.orderService.editOrder({
      id: this.selectedOrder.id,
      artistId: application.id,
    });
    this.toasterService.success('Accepted artist for Comission', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  editRequest(id: string) {
    this.router.navigateByUrl('/me/orders/edit/' + id);
  }
}
