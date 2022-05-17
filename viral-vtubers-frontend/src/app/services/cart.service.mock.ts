import { from, Observable } from 'rxjs';
import { CartFragmentFragment } from 'src/schema/type';

import { CartService } from './cart.service';

export const mockCartService = ({ carts }: MockCartServiceProps) => ({
  getCarts: () => carts || from([]),
  getPurchases: () => from([{}]),
  getSales: () => ({ sales$: from([[]]) }),
});

export const mockCartServiceProvider = (props: MockCartServiceProps) => ({
  provide: CartService,
  useValue: mockCartService(props),
});

export interface MockCartServiceProps {
  carts?: Observable<CartFragmentFragment[]>;
}
