import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/material/material.module';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
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
    SvgComponent
  ],
  providers: []
})
export class SharedModule { }
