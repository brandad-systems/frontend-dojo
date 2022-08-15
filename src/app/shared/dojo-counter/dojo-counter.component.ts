import { Component } from '@angular/core';

@Component({
  selector: 'app-dojo-counter',
  templateUrl: './dojo-counter.component.html',
  styleUrls: ['./dojo-counter.component.css']
})
export class DojoCounterComponent {

  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
