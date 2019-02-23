import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { AdminSharedService } from '@app/modules/admin/service/admin-shared.service';

@Component({
  selector: 'msp-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public adminSharedService: AdminSharedService
  ) { }

  ngOnInit() {
  }

  public addTitle(title: string) {
    this.adminSharedService.addPageTitle.emit(title);
  }

  public logOut() {
    this.authService.logOut();
  }

}
