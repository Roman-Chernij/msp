import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { AdminRouterModule } from '@app/modules/admin/admin-router.module';
import { AdminPageComponent } from '@app/modules/admin/pages/admin-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthService } from '@app/shared/services/auth.service';
import { AdminNavPageComponent } from './pages/admin-nav-page/admin-nav-page.component';
import { AdminSocialPageComponent } from './pages/admin-social-page/admin-social-page.component';
import { LanguageService } from '@app/modules/admin/service/language.service';
import { ApiService } from '@app/shared/services/api.service';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminEducationPageComponent } from './pages/admin-education-page/admin-education-page.component';
import { AdminExperiencePageComponent } from './pages/admin-experience-page/admin-experience-page.component';
import { AdminAboutPageComponent } from './pages/admin-about-page/admin-about-page.component';
import { AdminPortfolioPageComponent } from './pages/admin-portfolio-page/admin-portfolio-page.component';
import { AdminSharedService } from '@app/modules/admin/service/admin-shared.service';
import { AdminLanguageCheckComponent } from './components/admin-language-check/admin-language-check.component';
import { NavService } from '@app/modules/admin/service/nav.service';
import { AdminNavCreateComponent } from './pages/admin-nav-page/admin-nav-create/admin-nav-create.component';
import { LanguageCreateComponent } from './pages/language-page/language-create/language-create.component';


@NgModule({
  declarations: [
    LanguagePageComponent,
    AdminPageComponent,
    AdminNavPageComponent,
    AdminSocialPageComponent,
    AdminSidebarComponent,
    AdminEducationPageComponent,
    AdminExperiencePageComponent,
    AdminAboutPageComponent,
    AdminPortfolioPageComponent,
    AdminLanguageCheckComponent,
    AdminNavCreateComponent,
    LanguageCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    LanguageService,
    ApiService,
    AdminSharedService,
    NavService
  ]
})

export class AdminModule { }
