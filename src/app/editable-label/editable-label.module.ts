import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';

import { EditableLabelComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR } from './editable-label.component'

import { FocusDerectiveModule } from '../focus-derective/focus-derective.module';

@NgModule({
  imports: [
    CommonModule,
    FocusDerectiveModule,
    FormsModule
  ],
  exports: [EditableLabelComponent],
  declarations: [EditableLabelComponent],
  schemas: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class EditableLabelModule { }
