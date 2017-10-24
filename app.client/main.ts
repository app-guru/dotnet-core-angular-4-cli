// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './src/app.module';
// import { environment } from './environments/environment';

// if (!environment.production && module['hot']) {
//   module['hot'].accept();
//   module['hot'].dispose(() => {});
// } else {
//   enableProdMode();
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.log(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app.module';
import { environment } from './environments/environment';
import { handleHotModule } from './handleHotModule';

const platform = platformBrowserDynamic();
console.log(
  '**************************************************************************'
);
console.log('node-module', module);
handleHotModule(module, 'app-root', platform, isModuleHot => {
  if (environment.production && !isModuleHot) {
    enableProdMode();
  }

  platform.bootstrapModule(AppModule);
});
console.log(
  '**************************************************************************'
);
