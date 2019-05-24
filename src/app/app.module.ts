import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com')
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    MatCardModule
    ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
