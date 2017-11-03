import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  ElementRef,
  Renderer,
  EventEmitter,
  Input,
  Output,
  forwardRef,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms'

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/image';
import 'tinymce/plugins/save';

declare var tinymce: any;

const noop = () => {
};

export const MCE_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TinyEditorComponent),
    multi: true
};

@Component({
  selector: 'tiny-editor',
  template: `
  <div (outsideClick)="outsideClick($event)" (change)="outsideClick($event)">
    <div #target innerHTML="{{value}}">
    </div>
  </div>`,
  providers: [MCE_CONTROL_VALUE_ACCESSOR],
  outputs: ['update:change']
})

export class TinyEditorComponent implements AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
  @Input("value") innerValue: any = '';
  @Input("default") defaultValue: any = '';

  @Output() onEditorKeyup = new EventEmitter<any>();
  @Output("change") update = new EventEmitter<any>();

  @ViewChild('target') target:ElementRef;

  protected replaced: any;
  protected editor: any;

  //ControllValueAccessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
      return this.innerValue;
  }

  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  onBlur() {
      this.onTouchedCallback();
      console.log("blur");
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

  ngAfterViewInit() {
    tinymce.init({
      target: this.target.nativeElement,
      menubar:false,
      inline:true,
      statusbar: false,
      plugins: ['link', 'paste', 'table', 'textcolor', 'colorpicker', 'anchor', 'code', 'image'],
      toolbar: ['forecolor link anchor code image'],
      skin_url: 'http://favi.rocks:4200/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;

        editor.on('blur', () => {
          this.onBlur();
        });

        editor.on('change', (e) => {
          this.value = this.editor.getContent();
          this.update.emit(this.innerValue);
        });

        editor.on('SetContent', function (e) {
          console.log("S=", e.content);
        });

        editor.on('GetContent', function (e) {
          console.log("G=",e.content);
        });

        /*editor.on('keyup', () => {
          let content = editor.getContent();
          if (content != this.innerValue) {
            this.innerValue = content;
            this.onChangeCallback(content);
          }
          this.onEditorKeyup.emit(content);
        });*/
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnChanges() {
  }

  outsideClick(event) {
    this.value = this.editor.getContent();
    this.update.emit(this.innerValue);
    this.onTouchedCallback();
  }
}