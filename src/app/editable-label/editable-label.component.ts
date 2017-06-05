import {
  Component,
  OnInit,
  Input,
  Output,
  Directive,
  ElementRef,
  Renderer,
  forwardRef,
  EventEmitter,
  ChangeDetectorRef,
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
  template: `<div><span *ngIf='!editing' (click)="trigerEditor()">{{innerValue}}</span>
      <input *ngIf='editing' class="form-control" type="text" [(ngModel)]="value"
      (keydown.enter)="editing=onChange()||false" (focusout)="editing=onChange()||false" (change)="$event.stopPropagation()"
      (blur)="onBlur()" focus></div>`,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    outputs: ['update:change']
})

export class EditableLabelComponent implements OnInit, ControlValueAccessor{
  //EditableLabelComponent
  @Input("value") innerValue: any = '';
  @Input("default") defaultValue: any = '';
  @Input() editable: boolean = false;
  @Output("change") update = new EventEmitter<any>();
  
  editing: boolean = false;

  trigerEditor() {
      if (this.editable) {
        this.editing = this.editing?false:true;
        this.onTouchedCallback();
      }
  }

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
          this.defaultValue = value;
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
  }

  onChange() {
    if (this.editing)
        if (this.innerValue !== this.defaultValue) {
            this.update.emit(this.value);
            this.defaultValue = this.innerValue;
        }
  }

}
