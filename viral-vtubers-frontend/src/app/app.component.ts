import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentRoute = '';

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof RouterEvent) {
        this.currentRoute = event.url.split('/')[1];
        this.currentRoute = this.currentRoute.split('?')[0];
      }
    });
  }
  title = 'viral-vtubers-frontend';
}
