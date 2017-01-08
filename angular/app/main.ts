import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

(function() {
    'use strict';

	console.log("##### BRANCH 'master' | $angular/app/main.ts | >>>ANGULAR UP<<< #####");
})();