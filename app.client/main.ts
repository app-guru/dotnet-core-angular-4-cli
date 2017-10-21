// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export const rootElementTagName = 'app-root';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { handleHotModule } from './handleHotModule';

const platform = platformBrowserDynamic();

handleHotModule(module, rootElementTagName, platform, isModuleHot => {
  if (environment.production && !isModuleHot) {
    enableProdMode();
  }

  platform.bootstrapModule(AppModule);
});
