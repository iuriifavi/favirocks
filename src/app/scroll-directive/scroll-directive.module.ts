import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ScrollDirective],
  declarations: [ScrollDirective],
})
export class ScrollDirectiveModule { }
