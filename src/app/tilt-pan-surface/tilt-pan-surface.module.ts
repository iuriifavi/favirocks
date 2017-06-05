import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TiltPanSurfaceComponent } from './tilt-pan-surface.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [TiltPanSurfaceComponent], 
  declarations: [TiltPanSurfaceComponent,SafePipe]
})
export class TiltPanSurfaceModule { }
