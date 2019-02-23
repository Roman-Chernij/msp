import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
  OnInit
} from '@angular/core';
import { DialogModule } from '@app/modules/dialog/dialog.module';
import { DialogComponent } from '@app/modules/dialog/dialog/dialog.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: DialogModule
})
export class DialogService implements OnInit {

  dialogComponentRef: ComponentRef<DialogComponent>;
  private readonly _afterClosed = new Subject<any>();
  afterClosed;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngOnInit() { 
    this.afterClosed = this._afterClosed.asObservable();
  }

  public open(componentType: Type<any>) {
    this.appendDialogComponentToBody();
    this.dialogComponentRef.instance.childComponentType = componentType;
  }

  public close() {
    this.removeDialogComponentFromBody()
  }

  appendDialogComponentToBody() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
