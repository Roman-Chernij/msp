import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { UserPageComponent } from '@app/modules/user/user-page.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AboutPageComponent,
      },
      {
        path: 'experience',
        component: ExperiencePageComponent
      },
      {
        path: 'education',
        component: EducationPageComponent
      },
      {
        path: 'portfolio',
        component: PortfolioPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
