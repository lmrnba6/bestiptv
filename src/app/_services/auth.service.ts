
import { Injectable } from '@angular/core';

import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable()
export class AuthService {
  private manager: UserManager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() {
    // this.manager.getUser().then(user => {
    //   this.user = user;
    // });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    // return `Bearer ${this.user.id_token}`;
    return ``;

  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  logout(): Promise<void> {
    return this.manager.signoutRedirect().then(user => {
      this.user = user;
      localStorage.removeItem('user');
    });
  }

  getUser(): User {
    return this.user;
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
      if (user.profile.name) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'https://vdm.cgi.com',
    client_id: '@!E1CC.8085.167B.D782!0001!BE7F.E544!0008!CD80.4F8B.E2F3.FAD4',
    redirect_uri: 'http://localhost:4200',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type: 'id_token token',
    scope: 'openid profile email api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 4,
    silent_redirect_uri: 'http://localhost:4200',
    popup_redirect_uri: 'http://localhost:4200',
  };
}
