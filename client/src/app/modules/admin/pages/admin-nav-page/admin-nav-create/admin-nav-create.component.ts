import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'msp-admin-nav-create',
  templateUrl: './admin-nav-create.component.html',
  styleUrls: ['./admin-nav-create.component.scss']
})
export class AdminNavCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  prev() {
    this.router.navigate(['/admin/navigation']);
  }
}
