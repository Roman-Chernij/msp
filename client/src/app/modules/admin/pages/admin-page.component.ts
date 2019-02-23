import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminSharedService } from '@app/modules/admin/service/admin-shared.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'msp-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit, OnDestroy {

  pageTitle;
  pageTitleSubscribe: Subscriber<any>;

  constructor(
    private adminSharedService: AdminSharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setActiveTitle(this.router.url);
    this.pageTitleSubscribe = this.adminSharedService.addPageTitle.subscribe(title => this.pageTitle = title);
  }

  setActiveTitle(url: string) {
    const href = url.slice(url.indexOf('admin') + 6);
    const navigation = this.adminSharedService.adminNavigation;
    const targetNavItem = navigation.find(item => href === item.url );
    this.pageTitle = targetNavItem ? targetNavItem.title : '';
  }

  ngOnDestroy(): void {
    this.pageTitleSubscribe && this.pageTitleSubscribe.unsubscribe;
  }
}
