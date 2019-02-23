import { Component } from '@angular/core';

@Component({
  selector: 'msp-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="root">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {}
