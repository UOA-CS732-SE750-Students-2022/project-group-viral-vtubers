import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
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
  userId = '';
  isComment = false;

  selectedOrder?: OrderFragmentFragment;
  constructor(
    private router: Router,
    private orderService: OrderService,
    private userService: UserService,
    private toasterService: ToastrService
  ) {
    this.requests$ = orderService.getAllOrders().allOrders$;
    userService.getSelf().self$.subscribe((self) => {
      this.userId = self.id;
    });
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

  async apply(event: Event, commissionId: string): Promise<void> {
    event.preventDefault();
    this.orderService.applyOrder(commissionId).subscribe();
    this.selectedOrder = undefined;
    this.toasterService.success('Thank you for Applying', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }

  checkIfApplied(): boolean {
    const ifApplied = this.selectedOrder?.applications.find((applicant) => {
      applicant.id === this.userId;
    });
    return ifApplied === undefined;
  }
}
