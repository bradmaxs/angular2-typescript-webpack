import {Component} from 'angular2/core';

//import {TabsComponent} from '../common/tabs/tabs.component';
//import {TabComponent} from '../common/tabs/tab.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  //directives: [TabsComponent, TabComponent]
})
export class HomeComponent {

  constructor() {}

  ngOnInit() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ' Loaded');
  }

}
