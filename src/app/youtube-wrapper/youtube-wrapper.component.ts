import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GapiService } from '../services/gapi.service';

@Component({
  selector: 'app-youtube-wrapper',
  templateUrl: './youtube-wrapper.component.html',
  styleUrls: ['./youtube-wrapper.component.css'],
})
export class YoutubeWrapperComponent implements OnInit, AfterViewInit {

  constructor(private gapi: GapiService) {
    ;
  }

  ngOnInit() {
    function map(arr, callback, thiz) {
      ;
    }
  }

  test() {
    console.log(this.gapi.test())
  }

  ngAfterViewInit() {
    this.gapi.init(() => {this.test()})
    console.log("bla",this.gapi.instance);
  }

}
