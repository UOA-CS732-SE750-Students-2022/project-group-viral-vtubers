import { from } from 'rxjs';

import { UserService } from './user.service';

export const mockUserService = () => ({
  provide: UserService,
  useValue: {
    getUserLikedProjects: () => from([]),
    getSelf: () => ({
      self$: from([{ id: '2132' }]),
    }),
    getAccount: () => ({ account: from([]) }),
    getArtists: () => ({ query: null, artists$: from([{}]) }),
  } as unknown as UserService,
});
