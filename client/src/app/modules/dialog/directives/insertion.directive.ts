import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mspInsertion]'
})
export class InsertionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
