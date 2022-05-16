import { from, Observable } from 'rxjs';
import { OrderPaginationFragmentFragment } from 'src/schema/type';

import { OrderService } from './order.service';

export const mockOrderService = ({ orders }: MockOrderServiceProps) => ({
  getAllOrders: () => ({
    allOrders: orders || from([[]]),
  }),
  getOrdersWithLimit: (limit: number) => ({
    newestOrders$: from([]),
  }),
  myCommissions: () => from([{}]),
  myOrders: () => ({ myOrders$: from([{}]) }),
});

export const mockOrderServiceProvider = (props: MockOrderServiceProps) => ({
  provide: OrderService,
  useValue: mockOrderService(props),
});

export interface MockOrderServiceProps {
  orders?: Observable<OrderPaginationFragmentFragment>;
}
