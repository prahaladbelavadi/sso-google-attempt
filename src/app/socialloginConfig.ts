import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("368729150840-4ud1gglph21gm7umr4h5ohn5qash6gao.apps.googleusercontent.com")
      }
    ]);
  
    return config;
  }