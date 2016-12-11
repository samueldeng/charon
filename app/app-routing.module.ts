import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}          from "./home/home.component";
import {UploadComponent}        from "./upload/upload.component";
import {SlideComponent}         from "./slide/slide.component";
import {LoginComponent}         from "./login/login.component";
import {SignUpComponent}        from "./signup/signUp.component";


const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
