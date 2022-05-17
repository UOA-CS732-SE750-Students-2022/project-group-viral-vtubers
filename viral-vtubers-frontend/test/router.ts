import { Router } from '@angular/router';
import { from, Observable } from "rxjs";

export const mockRouter = (events?: Observable<Event>) => ({
  provide: Router,
  useValue: {
    navigateByUrl: (url: string) => {},
    events: events || from([]),
  } as unknown as Router,
});
