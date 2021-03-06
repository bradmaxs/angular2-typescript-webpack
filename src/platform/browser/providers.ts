/*
 * These are globally available services in any component or any other service
 */
import {provide} from 'angular2/core';

import {FORM_PROVIDERS} from 'angular2/common';

import {HTTP_PROVIDERS} from 'angular2/http';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  // ...MATERIAL_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
