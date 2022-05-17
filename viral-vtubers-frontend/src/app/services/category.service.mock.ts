import { from, Observable } from 'rxjs';
import { UserFragmentFragment } from 'src/schema/type';

import { CategoryService } from './category.service';

export const mockCategoryService = ({
  categories,
}: MockCategoryServiceProps) => ({
  getCategories: () => ({ categories$: categories || from([{}]) }),
});

export const mockCategoryServiceProvider = (
  props: MockCategoryServiceProps
) => ({
  provide: CategoryService,
  useValue: mockCategoryService(props),
});

export interface MockCategoryServiceProps {
  categories?: Observable<UserFragmentFragment[]>;
}
