import { BlurbService } from './blurb.service';

export const mockBlurbService = () => ({
  provide: BlurbService,
  useValue: {
    getCategoryBlurb: (id: string) => {},
    getSubcategoryBlurb: (id: string) => {},
  },
});
