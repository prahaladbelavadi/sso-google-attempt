// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { SocialLoginModule } from 'angularx-social-login';
// import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

// import {MatCardModule} from '@angular/material/card';

// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';

// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com')
//   }
// ]);

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     SocialLoginModule,
//     MatCardModule
//     ],
//   providers: [
//     {
//       provide: AuthServiceConfig,
//       useFactory: config
//     }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('368729150840-rl60t01f22rqirjmntq72es1qchusk4d.apps.googleusercontent.com')
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('561602290896109')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }