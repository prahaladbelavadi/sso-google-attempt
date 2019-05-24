// import { Component, OnInit } from '@angular/core';
// import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   user: SocialUser;

//   constructor(private authService: AuthService) { }

//   ngOnInit() {
//     this.authService.authState.subscribe((user) => {
//       this.user = user;
//       console.log(user);
//     });
//   }

//   // initiateGoolgeAuth(){
//   //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
//   //     .then((user) => {
//   //       // this.user = user;
//   //       console.log(user)
//   //     });
//   // }

//   // signOut(): void {
//   //   this.authService.signOut();
//   // }

// }


import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }

}