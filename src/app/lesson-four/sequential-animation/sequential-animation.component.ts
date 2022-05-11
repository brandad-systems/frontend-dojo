import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-sequential-animation',
  templateUrl: './sequential-animation.component.html',
  styleUrls: ['./sequential-animation.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('250ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('250ms', [
          animate('0.35s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1.0}),
          ]))
        ]), {optional: true})
      ])
    ])
  ],
})
export class SequentialAnimationComponent {

  public listItems = ["First Item", "Second Item", "Third Item", "Fourth Item"];

  addCard() {
    this.listItems.push("One More Card " + Math.random());
  }

  onCardClick(index: number) {
    this.listItems.splice(index, 1);
  }

  deleteAllCards() {
    this.listItems = [];
  }
}
