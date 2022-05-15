import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterEvent } from '@angular/router';

import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentRoute = '';
  defaultTitle = 'Viral Vtubers';

  constructor(
    private router: Router,
    private authService: AuthService,
    private titleService: Title
  ) {
    router.events.subscribe((event) => {
      if (event instanceof RouterEvent) {
        this.currentRoute = event.url.split('/')[1];
        this.currentRoute = this.currentRoute.split('?')[0];
        authService.getToken();

        if (this.currentRoute) {
          this.setTitle(
            this.currentRoute.charAt(0).toUpperCase() +
              this.currentRoute.slice(1)
          );
        } else {
          this.setTitle(this.defaultTitle);
        }
      }
    });
  }
  title = 'viral-vtubers-frontend';

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
