import { from } from 'rxjs';

import { UserService } from './user.service';

export const mockUserService = () => ({
  provide: UserService,
  useValue: {
    getUserLikedProjects: () => from([]),
    getSelf: () => from([{ id: '2132' }]),
  } as unknown as UserService,
});
