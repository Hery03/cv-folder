import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export const appConfig = [
  // HttpClient
  provideHttpClient(),

  // Ruteo standalone
  provideRouter(routes),

  // Traducciones
  importProvidersFrom(
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    })
  ),

  // Loader moderno de JSON
  ...provideTranslateHttpLoader({
    prefix: 'i18n/',
    suffix: '.json'
  })
];
