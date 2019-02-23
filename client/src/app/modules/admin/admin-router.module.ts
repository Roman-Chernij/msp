import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from '@app/modules/admin/pages/admin-page.component';
import { LanguagePageComponent } from '@app/modules/admin/pages/language-page/language-page.component';
import { AdminNavPageComponent } from './pages/admin-nav-page/admin-nav-page.component';
import { AdminSocialPageComponent } from './pages/admin-social-page/admin-social-page.component';
import { AdminGuard } from '@app/shared/guard/admin-guard';
import { AdminEducationPageComponent } from '@app/modules/admin/pages/admin-education-page/admin-education-page.component';
import { AdminExperiencePageComponent } from '@app/modules/admin/pages/admin-experience-page/admin-experience-page.component';
import { AdminAboutPageComponent } from '@app/modules/admin/pages/admin-about-page/admin-about-page.component';
import { AdminPortfolioPageComponent } from '@app/modules/admin/pages/admin-portfolio-page/admin-portfolio-page.component';



const adminRouters: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: LanguagePageComponent
      },
      {
        path: 'navigation',
        component: AdminNavPageComponent
      },
      {
        path: 'social',
        component: AdminSocialPageComponent
      },
      {
        path: 'education',
        component: AdminEducationPageComponent
      },
      {
        path: 'experience',
        component: AdminExperiencePageComponent
      },
      {
        path: 'about',
        component: AdminAboutPageComponent
      },
      {
        path: 'portfolio',
        component: AdminPortfolioPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRouters)],
  providers: [AdminGuard],
  exports: [RouterModule]
})

export class AdminRouterModule {}
