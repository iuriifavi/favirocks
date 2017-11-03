import { Component, OnInit, HostListener, ViewChild, Input, AfterViewInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export class Pos {
  public x: number;
  public y: number;

  constructor(first?: string|number|any, y?: number) {
    switch(typeof first) {
      case "string":
        let xy = (first as string).split(' ').map(Number);
        this.x = xy[0];
        this.y = xy[1];
        break;
      case "number":
        this.x = (first as number);
        this.y = y;
        break;
      default:
        this.x = 0;
        this.y = 0;
    }
  }
  toString(): string { if (this.x == 0 && this.x == 0) return "0"; return "x:" + this.x + " y:" + this.y; }
}

@Component({
  selector: 'tilt-pan-surface',
  template: `
  <div #targetDiv >
    <div [style.transform]="rotation | safe: 'style'" class="tilt-pan-surface">
      <ng-content></ng-content>
    </div>
  </div>`,
  styles: [`
  .tilt-pan-surface {
      transform-origin: 50% 50% 0px;
      transition-duration: 200ms;
  }`],
})
export class TiltPanSurfaceComponent implements OnInit, AfterViewInit {
  @Input("speed") transitionSpeed: any;
  @Input("interactive") isInteractive: boolean = false;
  @Input() limitX: any = 10;
  @Input() limitY: any = 10;
  @Input() perspective: any = 500;
  @Input("defaultRotation") set defaultRotation(val) {
    if (val instanceof Pos)
      this.defaultPoint = val;
    else
      this.defaultPoint = new Pos(val);
  }

  @ViewChild("targetDiv") targetDiv:any;

  defaultPoint: Pos = new Pos();

  targetPoint: Pos;

  get divX(): number {
    return this.targetDiv.nativeElement.offsetLeft || 0;
  }

  get divY(): number {
    return this.targetDiv.nativeElement.offsetTop || 0;
  }

  get divHeight(): number {
    return this.targetDiv.nativeElement.offsetHeight || 0;
  }

  get divWidth(): number {
    return this.targetDiv.nativeElement.offsetWidth || 0;
  }

  get rotation(): string {
    if (this.targetPoint && this.isInteractive) {
      let rp = Math.PI / 180;
      let rY = rp * this.limitY;
      let rX = rp * this.limitX;
      rY *= this.targetPoint.x;
      rX *= this.targetPoint.y;

      let sx = Math.sin(rX), cx = Math.cos(rX);
      let sy = Math.sin(rY), cy = Math.cos(rY);

      let matrix = [cy, sx * sy, cx * sy, 0,
                    0, cx, -sx, 0,
                    -sy, sx, cx * cy, 0,
                    0, 0, 0, 1];
      return "perspective(" + this.perspective + "px) matrix3d(" + matrix.join(',') + ")";
    }
    return "";
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(event) {
    this.targetPoint = new Pos(
        2 * ((event.pageX - this.divX) / this.divWidth  - 0.5),
        2 * ((event.pageY - this.divY) / this.divHeight - 0.5));
  }

  @HostListener("mouseleave", ["$event"])
  onMouseLeave(event) {
    this.targetPoint = this.defaultPoint;
  }
  
  constructor() {
  }

  ngOnInit() {
    this.targetPoint = this.defaultPoint;
  }

  ngAfterViewInit() {
  }

}
