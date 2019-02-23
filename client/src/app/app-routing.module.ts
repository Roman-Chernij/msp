import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/modules/user/user.module#UserModule',
    data: {loading: false}
  },
  {
    path: 'admin',
    loadChildren: '@app/modules/admin/admin.module#AdminModule',
    data: {loading: false}
  },
  {
    path: 'login',
    loadChildren: '@app/modules/login/login.module#LoginModule',
    data: {loading: false}
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
