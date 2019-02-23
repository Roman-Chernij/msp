import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/modules/dialog/services/dialog.service';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';

@Component({
  selector: 'msp-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(public dialog: DialogService) { }

  ngOnInit() {
    // this.dialog.open(SpinnerComponent);
    // setTimeout(() => this.dialog.close(), 3000)
  }

}
