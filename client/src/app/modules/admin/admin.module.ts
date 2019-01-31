import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LanguagePageComponent } from './language-page/language-page.component';
import { AdminRouterModule } from '@app/modules/admin/admin-router.module';
import { AdminPageComponent } from '@app/modules/admin/admin-page.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    LanguagePageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class AdminModule { }
