import { Component, OnInit, ElementRef } from '@angular/core';
import * as p5 from 'p5';
import * as ml5 from 'ml5';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: [ 'home.page.scss' ],
})
export class HomePage implements OnInit {
  curve: any;
  canvasSizeX = 200;
  canvasSizeY = 200;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    const p5obj = new p5(p => {
      p.setup = () => { this.setup(p); };
      p.draw = () => { this.draw(p); };
    }, this.el.nativeElement);
  }
  setup(p) {
    const c = document.querySelector('#canvasContainer');
    p
      .createCanvas(this.canvasSizeX, this.canvasSizeY)
      .parent(c);
  }
  draw(p) {
    p.background(220);
  }
}
