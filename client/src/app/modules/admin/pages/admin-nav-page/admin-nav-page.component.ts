import { Component, OnInit } from '@angular/core';
import { LanguageInterface } from '@app/shared/interfaces/language.interface';
import { NavService } from '@app/modules/admin/service/nav.service';

@Component({
  selector: 'msp-admin-nav-page',
  templateUrl: './admin-nav-page.component.html',
  styleUrls: ['./admin-nav-page.component.scss']
})
export class AdminNavPageComponent implements OnInit {

  isLoadNavigation: boolean;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.isLoadNavigation = true;
  }

  public changeActive$(language) {
    this.isLoadNavigation = true;
    this.fetchData(language);
  }

  private fetchData(language) {
    this.navService.getNavByID(language.langKey).subscribe(res => {
      this.isLoadNavigation = false;
    });
  }
}
