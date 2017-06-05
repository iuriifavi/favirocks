import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TinyEditorComponent, MCE_CONTROL_VALUE_ACCESSOR } from './tiny-editor.component';

import { OutsideClickDirectiveModule } from '../outside-click-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OutsideClickDirectiveModule
  ],
  exports: [ TinyEditorComponent ],
  declarations: [ TinyEditorComponent ],
  schemas: [MCE_CONTROL_VALUE_ACCESSOR]
})

export class TinyEditorModule { }
