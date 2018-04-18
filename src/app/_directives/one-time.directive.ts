import { Directive, TemplateRef, ViewContainerRef, NgZone } from '@angular/core';

@Directive({
  selector: '[appOneTime]'
})
export class OneTimeDirective {
  constructor(template: TemplateRef<any>, container: ViewContainerRef, zone: NgZone) {
    zone.runOutsideAngular(() => {
      const view: any = container.createEmbeddedView(template);
      setTimeout(() => view.detach());
    });
  }

}
