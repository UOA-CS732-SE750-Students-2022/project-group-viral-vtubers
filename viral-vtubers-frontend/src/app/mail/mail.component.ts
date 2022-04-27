import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  activeRoute: string = this.router.url;

  constructor(private router: Router) {
    this.router.events.subscribe((res) => {
      this.activeRoute = this.router.url;
    });
  }

  ngOnInit(): void {}
}
