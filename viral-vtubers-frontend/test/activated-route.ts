import { ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';

export const mockActivatedRoute = () => ({
  provide: ActivatedRoute,
  useValue: { paramMap: from([] as ParamMap[]) },
});
