import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MyOrdersFragmentFragment,
  OrderFragmentFragment,
  UserFragmentFragment,
} from 'src/schema/type';

@Component({
  selector: 'app-commission-requests',
  templateUrl: './commission-requests.component.html',
  styleUrls: ['./commission-requests.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CommissionRequestsComponent implements OnInit {
  myOrders: MyOrdersFragmentFragment;

  selectedOrder: OrderFragmentFragment | undefined;

  constructor(private router: Router) {
    this.myOrders = {
      active: [
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: null,
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Hair',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
          ],
        },
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: null,
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Hair',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
          ],
        },
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: null,
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Hair',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [],
        },
      ],
      past: [
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: {
            id: '1',
            bio: "I'm a designer and illustrator who loves anime and waifus.",
            numCompletedCommissions: 20,
            displayName: 'Nozomi Tojo',
            email: 'nozomi.senpai@gmail.com',
            numLikes: 291,
            profileImageURI:
              'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
            isFollowing: true,
          },
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Hair',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
          ],
        },
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: {
            id: '1',
            bio: "I'm a designer and illustrator who loves anime and waifus. I'm a designer and illustrator who loves anime and waifus. I'm a designer and illustrator who loves anime and waifus.",
            numCompletedCommissions: 20,
            displayName: 'Nozomi Tojo',
            email: 'nozomi.senpai@gmail.com',
            numLikes: 291,
            profileImageURI:
              'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
            isFollowing: true,
          },
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Hair',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
          ],
        },
        {
          bounty: 29.99,
          description:
            "I'm looking for a designer to create a logo for my company. I want a waifu as well. Idk what else to write here. Have a good night",
          id: '1',
          image:
            'https://static.wikia.nocookie.net/daffysbizarreadventure/images/0/02/Nozomi_Tojo.jpg/revision/latest/scale-to-width-down/360?cb=20200306231233',
          isDraft: false,
          name: 'Cute anime waifu ',
          owner: {
            id: '1',
            bio: 'I like vtubers a lot',
            numCompletedCommissions: 0,
            displayName: 'Nontan Fan',
            email: 'nozomi.fan@gmail.com',
            numLikes: 1,
            profileImageURI:
              'https://i.idol.st/u/card/art/197UR-Toujou-Nozomi-Pain-Pain-Go-Away-Magical-Fever-Svt4gA.png',
            isFollowing: true,
          },
          artist: {
            id: '1',
            bio: "I'm a designer and illustrator who loves anime and waifus.",
            numCompletedCommissions: 20,
            displayName: 'Nozomi Tojo',
            email: 'nozomi.senpai@gmail.com',
            numLikes: 291,
            profileImageURI:
              'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
            isFollowing: true,
          },
          tags: [
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Cry',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Anime',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
            {
              id: '1',
              name: 'Cat',
              color: '#ff0000',
              backgroundColor: '#ffffff',
            },
          ],
          applications: [
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
            {
              id: '1',
              bio: "I'm a designer and illustrator who loves anime and waifus.",
              numCompletedCommissions: 20,
              displayName: 'Nozomi Tojo',
              email: 'nozomi.senpai@gmail.com',
              numLikes: 291,
              profileImageURI:
                'https://static.wikia.nocookie.net/yuripedia/images/0/02/Nozomi_Tojo.jpg/revision/latest?cb=20160409233839',
              isFollowing: true,
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}

  navigateToUser(id: string | undefined) {
    this.router.navigateByUrl('/user/' + id);
  }

  setSelectedOrder(order: OrderFragmentFragment | undefined) {
    this.selectedOrder = order;
  }

  handleAcceptApplication(application: UserFragmentFragment) {
    // TODO do something
  }

  editRequest(id: string) {
    this.router.navigateByUrl('/me/orders/new', {
      state: {
        requestId: id,
      },
    });
  }
}
