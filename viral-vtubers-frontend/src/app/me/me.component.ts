import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  activeRoute: string = this.router.url;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toasterService: ToastrService
  ) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  logout(): void {
    this.authService.signOut();
    this.toasterService.success('Logged out', 'Success', {
      progressAnimation: 'decreasing',
      progressBar: true,
    });
  }

  ngOnInit(): void {}
}
