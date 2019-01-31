import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SocialNetworkComponent } from './social-network/social-network.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    SocialNetworkComponent,
    SidebarComponent
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
    SocialNetworkComponent
  ],
  providers: []
})
export class SharedModule { }
