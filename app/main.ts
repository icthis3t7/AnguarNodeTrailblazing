import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './buildsgg/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
