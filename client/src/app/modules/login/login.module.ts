import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from '@app/modules/login/login-page/login-page.component';
import { LoginRoutingModule } from '@app/modules/login/login-router.module';
import { LoginViewComponent } from '@app/modules/login/login-view.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthService } from '@app/modules/login/services/auth.service';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class LoginModule { }
