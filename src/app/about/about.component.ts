import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  text: string = ["Hey,",
  "Glad to see you on my small blog. Here you can read a lot about Software Development as well as SDLC.",
  "It's on unoficial blog fill free to comment for any posts.",
  "Don't miss to subscribe ;)"
  ].join("\n");
  constructor() { console.log("123") }

  ngOnInit() {
  }

}
