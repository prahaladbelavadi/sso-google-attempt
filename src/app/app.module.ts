import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';

import { getAuthServiceConfigs } from './socialloginConfig';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    getAuthServiceConfigs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
