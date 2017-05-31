import { Component } from '@angular/core';

import { routes } from '../app.routes'

import * as jQuery from 'jquery';

@Component({
  selector: 'nav',
  templateUrl: './top-bar.component.html',
  host: {"class": "navbar navbar-default navbar-fixed-top"}
})

export class TopBarComponent{
  isCollapsed: boolean = true

  left = routes.map( x => {
    return { url: x.path, text: x.component.name };
  })

  outsideClick(event) {
    if (!this.isCollapsed)
      this.isCollapsed = true;
  }

  collapseButtonClick(event) {
    this.isCollapsed = !this.isCollapsed;
  }

  brand = "Iurii Favi"
}
