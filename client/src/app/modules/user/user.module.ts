import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '@app/modules/user/user-routing.module';

import { AboutPageComponent } from './about-page/about-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { UserPageComponent } from '@app/modules/user/user-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLanguagesSelectComponent } from './components/header/header-languages-select/header-languages-select.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    PortfolioPageComponent,
    UserPageComponent,
    HeaderComponent,
    HeaderLanguagesSelectComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})

export class UserModule { }
