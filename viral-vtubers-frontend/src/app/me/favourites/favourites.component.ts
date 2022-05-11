import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}

interface sortBy {
  id: string;
  name: string;
}
