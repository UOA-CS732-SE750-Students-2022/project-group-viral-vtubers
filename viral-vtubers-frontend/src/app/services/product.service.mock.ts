import { from, Observable } from 'rxjs';

import { Product, ProductGQL } from '../../schema/type';
import { ProductService } from './product.service';

export const mockProductService = (product?: Observable<Product>) => ({
  provide: ProductService,
  useValue: {
    getProduct: (productId: string) => ({
      query: null as unknown as ProductGQL,
      product$: product || from([{ productId: '3' }]),
    }),
  },
});
