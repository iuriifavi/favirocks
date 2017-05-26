import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinyEditorComponent } from './tiny-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TinyEditorComponent
  ],
  declarations: [ TinyEditorComponent ],
  bootstrap: [ TinyEditorComponent ]
})

export class TinyEditorModule { }
