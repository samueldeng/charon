import { Component } from "@angular/core";
import {create} from "domain";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'charon-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  isSubmitting=false;
  cred = new Credential("","");

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.isSubmitting=true;
    this.authService.auth(this.cred).then((userToken) => {
      this.router.navigate(['/home']);
      this.authService.announceLogin(userToken);
    });
  };
}

export class Credential {
  constructor(
    public email: string,
    public password: string,
  ){}

}
