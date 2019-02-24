import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '@app/material/material.module';
import { LocalSpinnerComponent } from './components/local-spinner/local-spinner.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    SocialNetworkComponent,
    SidebarComponent,
    LocalSpinnerComponent,
    LanguagesComponent,
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
    LocalSpinnerComponent,
    SvgComponent
  ],
  providers: []
})
export class SharedModule { }
