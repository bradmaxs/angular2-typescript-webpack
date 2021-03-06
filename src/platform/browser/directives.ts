/*
 * These are globally available directives in any template
 */
import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';

// Angular 2 Router
import {ROUTER_DIRECTIVES} from 'angular2/router';

// platform common directives
import {RouterActive} from './router-active';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  // ...MATERIAL_DIRECTIVES,
  RouterActive
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
