import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent implements OnInit {
  @Input()
  chibi: String = 'vivi';

  @Input()
  text: String = 'Loading...';

  @Input()
  isFlipped: boolean = false;

  @Input()
  height: string = '300px';

  @Input()
  fontSize: string = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
