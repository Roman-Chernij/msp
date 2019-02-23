import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { InsertionDirective } from '@app/modules/dialog/directives/insertion.directive';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    DialogComponent,
    InsertionDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent],
  entryComponents: [DialogComponent, SpinnerComponent]
})
export class DialogModule { }
