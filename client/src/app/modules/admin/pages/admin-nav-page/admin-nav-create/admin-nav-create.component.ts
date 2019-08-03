import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationInterface } from '@app/shared/interfaces/navigation.interface';
import { config } from '@app/misc/config';
import { NavigationItemInterface } from '@app/shared/interfaces/navigation-item.interface';

@Component({
  selector: 'msp-admin-nav-create',
  templateUrl: './admin-nav-create.component.html',
  styleUrls: ['./admin-nav-create.component.scss']
})
export class AdminNavCreateComponent implements OnInit {

  navForm: FormGroup;
  navigation: NavigationInterface = {
    langKey: '',
    body: config.nav
  };

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    // if (this.activeRouter.params.navID) {
    //
    // } else {
    //   this.initNavForm(this.navigation.body)
    // }
    console.log(this)
  }

  initNavForm(data: NavigationItemInterface[]): void {
    this.navForm = new FormGroup({

    })
  }

  prev() {
    this.router.navigate(['/admin/navigation']);
  }
}
