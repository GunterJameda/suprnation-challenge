import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config.js';
import { App } from './app/app.component.js';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
