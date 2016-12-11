import { Injectable } from '@angular/core';

import {Credential} from "../login/login.component";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthService {

  private loginSubjectSource = new Subject<UserToken>();
  private logoutSubjectSource = new Subject();

  loginObservable = this.loginSubjectSource.asObservable();
  logoutObservable = this.logoutSubjectSource.asObservable();

  announceLogin(userToken: UserToken){
    this.loginSubjectSource.next(userToken);
  }

  announceLogout(){
    this.logoutSubjectSource.next();
  }

  auth(cred: Credential): Promise<UserToken> {

    return new Promise<UserToken>(resolve =>
      setTimeout(resolve, 500)) // delay 3 seconds
      .then(() => USERTOKEN);
  }
}

export class UserToken{
  username: string;
  token: string;
  expire: string;
}

export const USERTOKEN : UserToken = {
  username: "charon",
  token: "ed172e9d-d348-4eb2-addc-89084910069c",
  expire: "2015-12-23"
};
