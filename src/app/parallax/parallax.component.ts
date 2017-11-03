import { Component, OnInit, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'parallax',
  styles: [`
  .parallax {
    width: 100%;
    background-attachment: fixed;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .ba_scroll {
    background-attachment: scroll;
    transition-timing-function: ease;
  }
  .ba_fixed {
    background-attachment: fixed;
  }
  `],
  template: `<div #parallax [ngClass]="parallaxClass" (scrollDetector)="this.onScroll($event)" [style.backgroundImage]="backgroundImage" [style.backgroundAttachment]="fixed?'fixed':'scrol'"><ng-content></ng-content></div>`,
})

export class ParallaxComponent implements OnInit {
  @Input() image:string;
  @Input() scrollSpeed:number;
  @Input() fixed: boolean = false;
  @ViewChild("parallax") div:any;
  
  onScroll(windowYOffset) {
    if (this.fixed) return;

    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let elYOffset = this.div.nativeElement.offsetTop;
    let elHeight = this.div.nativeElement.offsetHeight;

    let from = elYOffset - windowYOffset;
    let to = from + elHeight;

    if (elHeight < windowHeight)
      if ((elYOffset + elHeight) < windowYOffset) return;
      if (from > windowHeight) return;

    if (this.scrollSpeed) {
      console.log(this.scrollSpeed);
      let elBackgrounPos = "50% " + (windowYOffset * this.scrollSpeed) + "px";
      this.div.nativeElement.style.backgroundPosition = elBackgrounPos;
    } else {
      let center = (from + to) / 2;
      let verticalOffset = Math.min(100,
                                    Math.max(100 * from/(windowHeight - elHeight) ,0));
      
      let elBackgrounPerc = "50% " + verticalOffset + "%";
      this.div.nativeElement.style.backgroundPosition = elBackgrounPerc;
    }
  }

  get parallaxClass(): Array<string> { 
    return ["parallax", this.fixed ? "ba_fixed" : "ba_scroll"];
  }

  get backgroundImage(): string {
    return 'url(' + this.image + ')';
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.onScroll(window.pageYOffset);
  }

}
