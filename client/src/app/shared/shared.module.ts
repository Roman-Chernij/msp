import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '@app/material/material.module';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    SocialNetworkComponent,
    SidebarComponent,
    SvgComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    SidebarComponent,
    SocialNetworkComponent,
    SvgComponent
  ],
  providers: []
})
export class SharedModule { }
