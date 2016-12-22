import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FileUploadModule} from "ng2-file-upload";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

import {HomeComponent} from "./home/home.component";
import {UploadComponent} from "./upload/upload.component";
import {SlideComponent} from "./slide/slide.component";
import {NavComponent} from "./nav/nav.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./signup/signUp.component";
import {AuthService} from "./service/auth.service";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    FileUploadModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    SlideComponent,
    NavComponent,
    LoginComponent,
    SignUpComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
