import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Directive, ElementRef, Renderer, ChangeDetectorRef } from '@angular/core';

@Directive({ selector:'[focus]'})
export class FocusDirective{

  constructor(private el:ElementRef, private rd:Renderer){
  }

  ngAfterViewInit(){
      this.el.nativeElement.focus();
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FocusDirective],
  declarations: [FocusDirective]
})

export class FocusDirectiveModule { }
