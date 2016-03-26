import {Component, Input} from 'angular2/core';

import {TabsComponent} from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
    `
})

export class TabComponent {

  @Input() title: string;
  @Input() active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

}
