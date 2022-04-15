import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-storybook-button',
  template: ` <button
    type="button"
    (click)="handleClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  handleClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'app-storybook-button--primary'
      : 'app-storybook-button--secondary';

    return ['app-storybook-button', `app-storybook-button--${this.size}`, mode];
  }
}
