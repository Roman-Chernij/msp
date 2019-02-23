import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from '@app/modules/login/login-view.component';
import { LoginPageComponent } from '@app/modules/login/login-page/login-page.component';


const loginRoutes: Routes = [
  {
    path: '',
    component: LoginViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}
