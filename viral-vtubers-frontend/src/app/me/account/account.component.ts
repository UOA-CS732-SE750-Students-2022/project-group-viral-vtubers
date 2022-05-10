import { Component, OnInit } from '@angular/core';
import { UserBlurbFragmentFragment } from 'src/schema/type';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  name: string;
  email: string;

  following: UserBlurbFragmentFragment[];

  followers: UserBlurbFragmentFragment[];

  constructor() {
    this.name = 'NozomiSenpai';
    this.email = 'nozomi.senpai@gmail.com';

    this.following = [
      {
        id: 'user2',
        displayName: 'pvtsnowman',
        status: 'Hello world I am a snowman',
        profileImageURI:
          'https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg',
      },
      {
        id: 'user3',
        displayName: 'Lolicon',
        status: 'I am a lolicon',
        profileImageURI:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrC63CLo2Gy3r-BBrCMih3MMC1mD9yabA7A&usqp=CAU',
      },
      {
        id: 'user4',
        displayName: 'AtlassianDuck',
        status: 'I am a duck and I go quack... sometimes',
        profileImageURI:
          'https://cdn.drawception.com/drawings/636765/PaXyd7mlXQ.png',
      },
      {
        id: 'user0',
        displayName: 'Shanhara_K',
        status: 'Developer | Designer | Artist | Musician | Writer',
        profileImageURI:
          'https://cutewallpaper.org/26/beautiful-anime-wallpaper-square/1037312739.jpg',
      },
      {
        id: 'user1',
        displayName: 'HiruNya',
        status: 'I like feet and stuff',
        profileImageURI: 'https://www.1999.co.jp/itbig60/10607393.jpg',
      },
    ];

    this.followers = [
      {
        id: 'user0',
        displayName: 'Shanhara_K',
        status: 'Developer | Designer | Artist | Musician | Writer',
        profileImageURI:
          'https://cutewallpaper.org/26/beautiful-anime-wallpaper-square/1037312739.jpg',
      },
      {
        id: 'user1',
        displayName: 'HiruNya',
        status: 'I like feet and stuff',
        profileImageURI: 'https://www.1999.co.jp/itbig60/10607393.jpg',
      },
      {
        id: 'user2',
        displayName: 'pvtsnowman',
        status: 'Hello world I am a snowman',
        profileImageURI:
          'https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
