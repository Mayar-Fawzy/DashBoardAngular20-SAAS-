import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

export const appConfig: ApplicationConfig = {
  providers: [
     provideAnimationsAsync(),
       providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          inputStyle: 'filled',
          darkTheme: false,
          darkModeSelector: false || 'none',
        },
      },
    }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
    ,provideHttpClient(),
     // Provide HttpClient for API calls
       importProvidersFrom(
      NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
    )

  ]
};
