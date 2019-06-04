import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import { BehaviorSubject } from 'rxjs';
import { ROUTES } from '../constants'; 

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userId;
  user = new BehaviorSubject();
  empType;
  auth0Manage;
  isHr;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid openid profile read:current_user update:current_user update:users ' +
        'create:current_user_metadata update:current_user_metadata create:users_app_metadata ' +
        'update:users_app_metadata'
  });

  constructor() {
    let localHr = localStorage.getItem('isHr');
    this.isHr = localHr && localHr === 'true' ? true : false; 
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.updateMetadata = this.updateMetadata.bind(this);
    this.getIsHr = this.getIsHr.bind(this);
    this.empType = localStorage.getItem("empType");
  }

  setEmployeeType(type) {
    localStorage.setItem("empType", type);
    this.empType = type;
  }

  login() {
    this.auth0.authorize({audience: "https://koolkids.auth0.com/api/v2/"});
  }

  handleAuthentication() {
    this.auth0.parseHash({hash: window.location.hash.split("callback")[1]}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {      
        window.location.href = ROUTES.url + '#/';
        console.error(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  getIsHr() {
    if (localStorage.getItem('isHr') === 'true') {
      return true;
    }
    return this.isHr;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    if (this.accessToken) {
      this.getManagement();
      this.auth0.client.userInfo(this.accessToken, (err, user) => {
        if (err) {
          console.error(err)
        } else {
          this.userId = user.sub;
          this.auth0Manage.getUser(this.userId, (err, fullUser) => {
            if (err) {
              console.error(err);
            } else {
              this.user.next(fullUser);
              this.checkFirstLogin(fullUser);
            }
          });
        }
      })
    }
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.error(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.user.next(undefined);

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isHr');
    localStorage.removeItem('empType');

    this.auth0.logout({
      return_to: window.location.origin
    });

    // navigate to the home route
    window.location.href = ROUTES.url;
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

  checkFirstLogin(user) {
    if (user.user_metadata) {
      if (user.user_metadata.isHr) {
        localStorage.setItem('isHr', 'true')
        this.isHr = user.user_metadata.isHr;
      }
      window.location.href = ROUTES.url + '#/' + this.empType;
    } else {
      window.location.href = ROUTES.url + '#' + ROUTES.register;
    }
  }

  updateMetadata(metadata) {
    this.auth0Manage.patchUserMetadata(this.userId, metadata, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        this.user.next(res);
        this.isHr = metadata.isHr;
        if (this.isHr) {
          localStorage.setItem('isHr', 'true')
        } else {
          localStorage.setItem('isHr', 'false')
        }
        window.location.href = ROUTES.url + '#/' + this.empType;
      }
    });
  }

  getManagement() {
    this.auth0Manage = new auth0.Management({
      domain: AUTH_CONFIG.domain,
      token: this.accessToken
    });
  }
}
