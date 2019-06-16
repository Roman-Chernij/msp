import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { NavService } from '@app/modules/admin/service/nav.service';
import { NavigationInterface } from '@app/shared/interfaces/navigation.interface';
import { NavigationItemInterface } from '@app/shared/interfaces/navigation-item.interface';


@Component({
  selector: 'msp-admin-nav-page',
  templateUrl: './admin-nav-page.component.html',
  styleUrls: ['./admin-nav-page.component.scss']
})
export class AdminNavPageComponent implements OnInit {

  isLoadNavigation: boolean;
  navigation: NavigationInterface;
  currentNavigation: NavigationItemInterface;

  @ViewChild('template') template: TemplateRef<any> ;

  constructor(
    private navService: NavService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.isLoadNavigation = true;
    console.log(this  )
  }

  public changeActive$(language): void {
    if (language) {
      this.isLoadNavigation = true;
      this.currentNavigation = language;
      this.fetchData(language);
    } else {
      this.isLoadNavigation = false;
    }

  }

  public edit() {
    if (this.currentNavigation && this.currentNavigation._id) {
      this.router.navigate([`/admin/navigation/language/${this.currentNavigation._id}/create`]);
    } else {
      this.snackBar.openFromTemplate(this.template, {
        duration: 700,
        panelClass: 'mat-snack-bar-error',
        announcementMessage: 'erorr',
        horizontalPosition: "end",
        politeness: "assertive",
        verticalPosition: "top"
      });
    }
  }

  private fetchData(language): void {
    this.navService.getNavByID(language._id).subscribe(res => {
      this.navigation = res;
      this.isLoadNavigation = false;
    });
  }
}
