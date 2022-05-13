import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import {
  MyCommissionsFragmentFragment,
  OrderFragmentFragment,
} from 'src/schema/type';

@Component({
  selector: 'app-manage-commissions',
  templateUrl: './manage-commissions.component.html',
  styleUrls: ['./manage-commissions.component.scss'],
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
export class ManageCommissionsComponent implements OnInit {
  myCommissions$: Observable<MyCommissionsFragmentFragment>;

  selectedOrder?: OrderFragmentFragment;

  constructor(private router: Router, private orderService: OrderService) {
    this.myCommissions$ = orderService.myCommissions().myCommissions$;
  }

  ngOnInit(): void {}

  navigateToUser(id: string | undefined) {
    this.router.navigateByUrl('/user/' + id);
  }

  setSelectedOrder(order: OrderFragmentFragment | undefined) {
    this.selectedOrder = order;
  }

  handleCancelApplication(order: OrderFragmentFragment) {
    // TODO: cancel application
  }
}
