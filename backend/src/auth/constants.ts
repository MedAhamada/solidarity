import { environment } from '../environments/environment';

export const jwtConstants = {
  secret: environment.jwt_secret,
};
