import { NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Directive, ElementRef, Renderer, ChangeDetectorRef, HostListener } from '@angular/core';

@Directive({ selector:'[outsideClick]'})
export class OutsideClickDirective{
  @Output('outsideClick') outsideClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el:ElementRef, private rd:Renderer){
  }

  @HostListener("window:click", ['$event.target'])
  onOutsideClick(target) {
    let element = this.el.nativeElement;
    while(element != target) {
      if (!target.parentElement) break;
      target = target.parentElement;
    }

    if (element != target)
      return this.outsideClick.emit(true);
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OutsideClickDirective],
  declarations: [OutsideClickDirective]
})

export class OutsideClickDirectiveModule { }
