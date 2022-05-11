import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-simple-animation',
  templateUrl: './simple-animation.component.html',
  styleUrls: ['./simple-animation.component.scss'],
  animations: [
    trigger('leftRight', [
      state('left', style({
        transform: 'translateX(0)'
      })),
      state('right', style({
        transform: 'translateX(600px)'
      })),
      transition('left => right', [
        animate('1s')
      ]),
      transition('right => left', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SimpleAnimationComponent {
  public isLeft = true;

  animateCube() {
    this.isLeft = !this.isLeft;
  }

}
