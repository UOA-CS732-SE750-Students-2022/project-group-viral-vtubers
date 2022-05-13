import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ArtistPaginationFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-view-artists',
  templateUrl: './view-artists.component.html',
  styleUrls: ['./view-artists.component.scss'],
})
export class ViewArtistsComponent implements OnInit {
  public artists$: Observable<ArtistPaginationFragmentFragment>;
  constructor(private userService: UserService) {
    this.artists$ = userService.getArtists().artists$;
  }

  follow(event: Event, artistId: string): void {
    event.preventDefault();
    this.userService.follow(artistId, true).subscribe();
  }

  unfollow(event: Event, artistId: string): void {
    event.preventDefault();
    this.userService.follow(artistId, false).subscribe();
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }

  ngOnInit(): void {}
}
