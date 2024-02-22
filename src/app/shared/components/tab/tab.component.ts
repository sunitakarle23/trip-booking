import { Component, Input } from '@angular/core';
import { Tabs } from 'src/app/flight/flight-constants';

interface TabInterface {
  name: string,
  redirectPath: string,
  icon: string,
  isActive: boolean
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  tabs: TabInterface[] = Tabs;
  constructor() {}

}
