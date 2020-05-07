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
  canvasSizeY = 500;
  fish: any;
  mobileNet: any;
  fish: any;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    const p5obj = new p5(p => {
      p.preload =() =>{this.preload(p);};
      p.setup = () => { this.setup(p); };
      p.draw = () => { this.draw(p); };
    }, this.el.nativeElement);
  }
  preload(p){
    this.mobileNet=ml5.imageClassifier('MobileNet');
  }


  setup(p) {
    const c = document.querySelector('#canvasContainer');
    p
      .createCanvas(p.displayWidth, p.displayHeight-this.canvasSizeY)
      .parent(c);
      console.log('ml5 version:', ml5.version);
      console.log(this.mobileNet);

  }
  draw(p) {
    p.background(220);
  }
}
