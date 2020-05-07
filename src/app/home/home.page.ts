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
  mobileNet: any;
 classifier:any;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    const p5obj = new p5(p => {
      p.preload =() =>{this.preload(p);};
      p.setup = () => { this.setup(p); };
      p.draw = () => { this.draw(p); };
    }, this.el.nativeElement);
  }
  preload(p){
    this.classifier = ml5.imageClassifier('MobileNet', this.modelLoaded);
  }
  // When the model is loaded
  modelLoaded() {
    console.log('Model Loaded!');
  }

  setup(p) {
    const c = document.querySelector('#canvasContainer');
    p
      .createCanvas(p.displayWidth, this.canvasSizeY)
      .parent(c);
      console.log('ml5 version:', ml5.version);
      this.classifier.classify(document.getElementById('image'), (err, results) => {
    console.log(results);
     p.text("label: "+results[0].label,20,20);
     p.text("confidence: "+results[0].confidence,20,40);
  });

  }
  draw(p) {
  //  p.background(220);

  }
}
