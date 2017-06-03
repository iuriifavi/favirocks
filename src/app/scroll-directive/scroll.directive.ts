import { Directive, ElementRef, Renderer, NgZone, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as ScrollGlobals from './scroll.globals';

@Directive({
  selector: '[scrollDetector]'
})
export class ScrollDirective {
  @Output('scrollDetector') onScroll: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription;

  constructor(private ngzone: NgZone, private el:ElementRef, private rd:Renderer){
  }

  ngAfterViewInit(){
    this.ngzone.runOutsideAngular( () => {
      this.subscription = ScrollGlobals.windowOnScroll.subscribe(() => this.onScroll.emit(window.pageYOffset));
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
