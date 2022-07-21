import { Component } from '@angular/core';
import { Lesson } from '../models/lesson.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  lessons: Lesson[] = [
    {
      title: 'Angular: Forms',
      description: 'Template Driven VS. Reactive',
      url: 'lesson/angular/forms',
      type: 'angular',
    },
    {
      title: 'CSS: Layout',
      description: 'Grid & Flexbox',
      url: 'lesson/css/grid-and-flexbox',
      type: 'css3',
    },
    {
      title: 'RxJs: Observables',
      description: 'Observables all the way down',
      url: 'lesson/rxjs/observables',
      type: 'rxjs',
    },
    {
      title: 'Angular Animations',
      description: 'Animationen mit @angular/animations',
      url: 'lesson/angular/animations',
      type: 'angular',
    },
    {
      title: 'Angular Material',
      description: 'Getting started with Angular Material',
      url: 'lesson/angular/material',
      type: 'angular',
    },
    {
      title: 'Observable Operators',
      description: 'Nützliche Operatoren und Anwendungszwecke',
      url: 'lesson/rxjs/operators',
      type: 'angular',
    },
  ];
}
