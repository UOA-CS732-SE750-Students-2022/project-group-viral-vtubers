import { Router } from '@angular/router';

export const mockRouter = () => ({
  provide: Router,
  useValue: {
    navigateByUrl: (url: string) => {},
  } as Router,
});
