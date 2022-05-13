import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.scss'],
})
export class NewMailComponent implements OnInit {
  @ViewChild('receiver')
  receiver!: ElementRef;

  invalidReceiver = false;

  constructor(
    private mailService: MailService,
    private userService: UserService,
    private router: Router
  ) {}

  async checkUser(userName: string): Promise<boolean> {
    try {
      await firstValueFrom(
        this.userService.getUserByName(userName).userByName$
      );
      return true;
    } catch (error) {
      this.invalidReceiver = true;
    }
    return false;
  }

  async sendMail(receiverName: string, body: string, subject: string) {
    console.log(receiverName, body, subject);
    if (!(await this.checkUser(receiverName))) {
      return;
    }

    this.mailService
      .sendMail({
        body,
        receiverUserId: receiverName,
        title: subject,
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/mail/sent');
      });
  }

  ngOnInit(): void {}
}
