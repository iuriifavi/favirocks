import {
  Component,
  OnInit,
  Input,
  Output,
  Directive,
  ElementRef,
  Renderer,
  forwardRef,
  EventEmitter
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditableLabelComponent),
    multi: true
};

@Component({
  selector: 'editable-label',
  styles: [`.fit-horisontal { width: 100% }`],
  template: `<div>
      <div *ngIf='!editing' class="fit-horisontal" [(innerHtml)]="value" (click)="onLabelClick()"></div>
      <input *ngIf='editing' [(ngModel)]="value" class="fit-horisontal"
      (keydown)="onKeyDown($event)" (focusout)="onFocusOut($event)" focus >
    </div>`,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})

export class EditableLabelComponent implements OnInit, ControlValueAccessor{
  //EditableLabelComponent
  @Input("value") innerValue: any = '';
  @Input() editable;
  editing: boolean;

  //ControllValueAccessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
      return this.innerValue;
  };

  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  onBlur() {
      this.onTouchedCallback();
  }

  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

  //EditableLabelComponent
  constructor() { }

  ngOnInit() {
    /*this.inputControl.valueChanges
      .debounceTime(250)
      .subscribe(() => this.change.emit(event));*/
  }

  onLabelClick() {
    if (this.editable)
      this.editing = true;
  }

  onFocusOut(event) {
    if (this.editable) {
      this.editing = false;
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.editing = false;
      return false;
    }
  }

}
