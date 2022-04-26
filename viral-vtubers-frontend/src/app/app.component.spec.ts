import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { routes } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'viral-vtubers-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('viral-vtubers-frontend');
  });

  it('should contain route for /user/:id', () => {
    const expectedRoute = { path: 'user/:id', component: UserProfileComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /cart', () => {
    const expectedRoute = { path: 'cart', component: CartComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /feed', () => {
    const expectedRoute = { path: 'feed', component: ActivityFeedComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /signin', () => {
    const expectedRoute = { path: 'signin', component: SignInComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /register', () => {
    const expectedRoute = { path: 'register', component: SignUpComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for **', () => {
    const expectedRoute = { path: '**', component: NotFoundComponent };
    expect(routes).toContain(expectedRoute);
  });

});
