import { Component, OnInit } from '@angular/core';
import { ProductBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  sortOptions: sortBy[] = [
    { id: 'newest', name: 'Time added (newest) ' },
    { id: 'oldest', name: 'Time added (oldest) ' },
  ];
  selectedSortOption: sortBy = this.sortOptions[0];

  products: ProductBlurbFragmentFragment[];

  constructor() {
    this.products = [];
  }

  ngOnInit(): void {}
}

interface sortBy {
  id: string;
  name: string;
}
