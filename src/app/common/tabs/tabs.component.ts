import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  directives: [NgFor],
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `
})

export class TabsComponent {

  tabs: TabComponent[] = [];

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }
}
