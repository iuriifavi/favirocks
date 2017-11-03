import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { routes } from '../app.routes'

@Component({
  selector: 'nav',
  templateUrl: './top-bar.component.html',
  host: {"class": "navbar navbar-default navbar-fixed-top"},
})

export class TopBarComponent{
  isCollapsed: boolean = true

  constructor() {

  }

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
