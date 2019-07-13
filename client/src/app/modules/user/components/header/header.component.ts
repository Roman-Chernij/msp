import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav;

  constructor() { }

  ngOnInit() {
  }

}
