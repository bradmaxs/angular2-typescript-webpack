require('assets/css/main.scss');

import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AppState} from './app.service';

@Component({
  selector: 'app',
  template: require('./app.component.html')
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])

export class AppComponent {

  constructor(public appState: AppState) {}

  get state() {
    return this.appState.get();
  }

  ngOnInit() {
    console.log('Initial App State', this.state);
  }

}
