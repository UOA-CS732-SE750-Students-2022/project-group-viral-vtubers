import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoriesGQL, CategoryFragmentFragment } from 'src/schema/type';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories$?: Observable<CategoryFragmentFragment[]>;

  constructor(private categoriesGQL: CategoriesGQL) {}

  getCategories() {
    this.categories$ = this.categoriesGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.categories));
    return { query: this.categoriesGQL, categories$: this.categories$ };
  }
}
