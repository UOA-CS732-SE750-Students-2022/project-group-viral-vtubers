import { GraphQLRequest } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthService } from 'src/app/shared/auth/auth.service';

export const createAuthLink = (authService: AuthService) => {
  const authLink = setContext(
    async (operation: GraphQLRequest, prevContext: any) => {
      const jwt: string = await authService.getToken();

      if (!jwt) {
        return {};
      } else {
        return {
          headers: { Authorization: `Bearer ${jwt}` },
        };
      }
    }
  );
  return authLink;
};
