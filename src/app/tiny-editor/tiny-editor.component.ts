import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/image';


declare var tinymce: any;

@Component({
  selector: 'tiny-editor',
  template: `<textarea id="{{elementId}}" (onEditorContentChange)="keyupHandle($event)" [value]="value||''"></textarea>`
})

export class TinyEditorComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() value;
  @Input() elementId: String = "tinyEditor"
  @Output() onEditorKeyup = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      menubar:false,
      statusbar: false,
      plugins: ['link', 'paste', 'table', 'textcolor', 'colorpicker', 'anchor', 'code', 'image'],
      toolbar: ['forecolor link anchor code image'],
      skin_url: 'http://favi.rocks:4200/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnInit() {}
}