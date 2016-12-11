import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {AuthService, UserToken} from "../service/auth.service";

@Component({
  moduleId: module.id,
  selector: 'charon-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent {
  userToken: UserToken;

  constructor(private router: Router, private authService: AuthService) {
    // this.userToken = new UserToken();

    authService.loginObservable.subscribe(userToken => {
      this.userToken = userToken;
    });

  }

  onLogout(){
    this.authService.announceLogout();
    this.userToken=null;
  }
}
