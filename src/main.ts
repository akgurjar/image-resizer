import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
navigator.serviceWorker.onmessage = (event) => {
  console.log(event.data.file);
  alert('File Received');
};
navigator.serviceWorker.register('/assets/share-target.js');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
