import {bootstrap} from 'angular2/platform/browser';
import {provideInitialState, hotModuleReplacement} from 'angular2-hmr';

import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

import {AppState} from './app/app.service';
import {AppComponent} from './app/app.component';

export function main(initialState = {}) {
  let APP_PROVIDERS = [
    provideInitialState(initialState),
    AppState
  ];

  return bootstrap(AppComponent , [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
  .catch(err => console.error(err));
}

/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */

if ('development' === ENV && HMR === true) {
  // activate hot module reload
  hotModuleReplacement(main, module);
} else {
  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
