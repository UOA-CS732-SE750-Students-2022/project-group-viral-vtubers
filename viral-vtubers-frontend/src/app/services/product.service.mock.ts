import { from } from 'rxjs';

import { ProductGQL } from '../../schema/type';
import { ProductService } from './product.service';

export const mockProductService = () => ({
  provide: ProductService,
  useValue: {
    getProduct: (productId: string) => ({
      query: null as unknown as ProductGQL,
      product$: from([{ productId: '3' }]),
    }),
  },
});
