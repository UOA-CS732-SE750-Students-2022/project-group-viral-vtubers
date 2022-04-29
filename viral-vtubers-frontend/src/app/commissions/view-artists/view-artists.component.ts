import { Component, OnInit } from '@angular/core';
import { ArtistFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-view-artists',
  templateUrl: './view-artists.component.html',
  styleUrls: ['./view-artists.component.scss'],
})
export class ViewArtistsComponent implements OnInit {
  public artists: ArtistFragmentFragment[] = [
    {
      id: '1',
      displayName: 'Hello',
      numCompletedCommissions: 1,
      numLikes: 1,
      profileImageURI: 'https://picsum.photos/400',
      isFollowing: false,
      tags: [
        {
          id: '1',
          name: 'test',
        },
      ],
    },
    {
      id: '1',
      displayName: 'Hello',
      numCompletedCommissions: 1,
      numLikes: 1,
      profileImageURI: 'https://picsum.photos/300#test',
      isFollowing: false,
      tags: [
        {
          id: '1',
          name: 'test',
        },
      ],
    },
    {
      id: '1',
      displayName: 'Hello',
      numCompletedCommissions: 1,
      numLikes: 1,
      profileImageURI: 'https://picsum.photos/500#tests',
      isFollowing: false,
      tags: [
        {
          id: '1',
          name: 'test',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
