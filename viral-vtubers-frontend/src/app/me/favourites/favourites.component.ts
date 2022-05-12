import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
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

  products$?: Observable<ProductBlurbFragmentFragment[]>;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }
      const products = userService.getUserLikedProjects(id);
      this.products$ = products.likedProducts$;
    });
  }

  ngOnInit(): void {}
}

interface sortBy {
  id: string;
  name: string;
}
