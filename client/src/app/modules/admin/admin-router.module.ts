import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from '@app/modules/admin/admin-page.component';
import { LanguagePageComponent } from '@app/modules/admin/language-page/language-page.component';



const adminRouters: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LanguagePageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRouters)],
  exports: [RouterModule]
})

export class AdminRouterModule {}
