import { ROUTES } from '../constants';

export const AUTH_CONFIG = {
  domain: 'koolkids.auth0.com',
  clientId: 'JfaD0c44H9h62aDA1JxjtKOa9G5E7QCx',
  callbackUrl: ROUTES.url + '#/callback',
  tokenUrl: 'https://koolkids.auth0.com/oauth/token'
}
