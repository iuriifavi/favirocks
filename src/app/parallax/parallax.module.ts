import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax.component';
import { ScrollDirectiveModule } from '../scroll-directive';

@NgModule({
  imports: [
    CommonModule,
    ScrollDirectiveModule
  ],
  exports: [ParallaxComponent],
  declarations: [ParallaxComponent],
})
export class ParallaxModule { }
