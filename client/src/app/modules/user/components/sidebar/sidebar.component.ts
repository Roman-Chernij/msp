import { Component, OnInit } from '@angular/core';
import { NavigationItemInterface } from '@app/shared/interfaces/navigation-item.interface';
import { config } from '@app/misc/config';

@Component({
  selector: 'msp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation = config.nav;

  constructor() { }

  ngOnInit() {
  }
}
