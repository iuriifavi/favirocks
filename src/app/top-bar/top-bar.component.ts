import { Component } from '@angular/core';

import { routes } from '../app.routes'

@Component({
  selector: 'nav',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  host: {"class": "navbar navbar-default navbar-fixed-top"}
})

export class TopBarComponent{
  left = routes.map( x => {
    return { url: x.path, text: x.component.name };
  })

  right = [
    {url: "#", text: "link1"},
    {url: "#", text: "link2"}
  ]

  width = 60
  height = 60
  name = "Iurii Favi"
  image = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApHAAAAJGQyZDQ0Zjk2LTE0YjAtNGQxZC1hMjcwLTY3MzBkNjgzZjcyOQ.jpg"
}
