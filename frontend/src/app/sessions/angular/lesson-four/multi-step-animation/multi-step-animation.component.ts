import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

enum MultiStepEnum {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
  FOURTH = 'fourth',
}

@Component({
  selector: 'app-multi-step-animation',
  templateUrl: './multi-step-animation.component.html',
  styleUrls: ['./multi-step-animation.component.scss'],
  animations: [
    trigger('stepTrigger', [
      state(
        'first',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'second',
        style({
          transform: 'translateX(200px) rotate(30deg)',
        })
      ),
      state(
        'third',
        style({
          transform: 'translateX(400px) rotate(-50deg)',
        })
      ),
      state(
        'fourth',
        style({
          transform: 'translateX(600px) rotate(360deg)',
        })
      ),
      transition('* => *', [animate('0.5s')]),
    ]),
  ],
})
export class MultiStepAnimationComponent {
  public stepCounter = 0;
  public currentStep = MultiStepEnum.FIRST;

  animateCube() {
    switch (this.stepCounter) {
      case 0:
        this.currentStep = MultiStepEnum.SECOND;
        this.stepCounter++;
        break;
      case 1:
        this.currentStep = MultiStepEnum.THIRD;
        this.stepCounter++;
        break;
      case 2:
        this.currentStep = MultiStepEnum.FOURTH;
        this.stepCounter++;
        break;
      case 3:
        this.currentStep = MultiStepEnum.FIRST;
        this.stepCounter = 0;
        break;
    }
  }
}
