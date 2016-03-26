import {Component} from 'angular2/core';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent {

  constructor() {}

  ngOnInit() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ' Loaded');
  }

}
