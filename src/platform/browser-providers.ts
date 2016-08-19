/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 Auth
import {AUTH_PROVIDERS} from '../app/auth.guard';
import {CanDeactivateGuard} from '../app/canDeactivate';
// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// service
import {LoginService} from '../app/pages/login/services/loginService';
// AngularClass
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


import { routes, asyncRoutes, prefetchRouteCallbacks } from '../app/app.routes';
import { APP_RESOLVER_PROVIDERS } from '../app/app.resolver';
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // 各种service
  LoginService,
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),

  ...APP_RESOLVER_PROVIDERS,

  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard,
  provideWebpack(asyncRoutes),
  providePrefetchIdleCallbacks(prefetchRouteCallbacks),

  ...HTTP_PROVIDERS,

  { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
