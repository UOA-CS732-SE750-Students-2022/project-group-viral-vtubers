import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-space',
  templateUrl: './creator-space.component.html',
  styleUrls: ['./creator-space.component.scss'],
})
export class CreatorSpaceComponent implements OnInit {
  activeRoute: string = this.router.url;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  ngOnInit(): void {}
}
