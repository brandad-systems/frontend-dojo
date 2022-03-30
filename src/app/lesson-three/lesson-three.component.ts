import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-lesson-three',
  templateUrl: './lesson-three.component.html',
  styleUrls: ['./lesson-three.component.scss']
})
export class LessonThreeComponent implements OnInit {

  myObservable$ = new Observable(observer => {
    console.log('observable started');
    observer.next(42);
    observer.next(100);
    observer.next(200);

    setTimeout(() => {
      observer.next(300); // happens asynchronously
    }, 1000);

    // subscriber.error('When error is hit the observable stops emitting');

    setTimeout(() => {
      observer.complete();
    }, 2500);

    setTimeout(() => {
      observer.next(400);
    }, 2000);
  });

  constructor() { }

  ngOnInit() {
    this.myObservable$.subscribe(value => {
      console.log(value);
    })
  }

}
