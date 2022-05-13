import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  AddOrderGQL,
  AddOrderInput,
  ApplyOrderGQL,
  DeleteOrderGQL,
  EditOrderGQL,
  EditOrderInput,
  MyCommissionsFragmentFragment,
  MyCommissionsGQL,
  MyOrdersFragmentFragment,
  MyOrdersGQL,
  OrderFragmentFragment,
  OrderGQL,
} from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order$?: Observable<OrderFragmentFragment>;
  myCommissions$?: Observable<MyCommissionsFragmentFragment>;
  myOrders$?: Observable<MyOrdersFragmentFragment>;

  constructor(
    private orderGQL: OrderGQL,
    private myCommissionsGQL: MyCommissionsGQL,
    private myOrdersGQL: MyOrdersGQL,
    private addOrderGQL: AddOrderGQL,
    private editOrderGQL: EditOrderGQL,
    private deleteOrderGQL: DeleteOrderGQL,
    private applyOrderGQL: ApplyOrderGQL
  ) {}

  getOrder(orderId: string) {
    this.order$ = this.orderGQL
      .watch({ id: orderId })
      .valueChanges.pipe(map((res) => res.data.order));

    return { query: this.orderGQL, order$: this.order$ };
  }

  myCommissions() {
    this.myCommissions$ = this.myCommissionsGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.myCommissions));
    return {
      query: this.myCommissionsGQL,
      myCommissions$: this.myCommissions$,
    };
  }

  myOrders() {
    this.myOrders$ = this.myOrdersGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.myOrders));
    return { query: this.myOrdersGQL, myOrders$: this.myOrders$ };
  }

  addOrder(input: AddOrderInput) {
    return this.addOrderGQL.mutate({ input });
  }

  editOrder(input: EditOrderInput) {
    return this.editOrderGQL.mutate({ input });
  }

  deleteOrder(id: string) {
    return this.deleteOrderGQL.mutate({ id });
  }

  applyOrder(id: string) {
    return this.applyOrderGQL.mutate({ id });
  }
}
