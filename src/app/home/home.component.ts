import { Component } from '@angular/core';
import { Lesson } from '../models/lesson.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {}

  lessons: Lesson[] = [
    {
      title: 'Angular: Forms',
      description: 'Template Driven VS. Reactive',
      url: 'lesson/1',
      type: 'angular'
    },
    {
      title: 'CSS: Layout',
      description: 'Grid & Flexbox',
      url: 'lesson/2',
      type: 'css3',
    },
    {
      title: 'RxJs: Observables',
      description: 'Observables all the way down',
      url: 'lesson/3',
      type: 'rxjs'
    },
    {
      title: 'Angular Animations',
      description: 'Animationen mit @angular/animations',
      url: 'lesson/4',
      type: 'angular'
    },
    {
      title: 'Angular Material',
      description: 'Getting started with Angular Material',
      url: 'lesson/5/am-overview',
      type: 'angular'
    },
    {
      title: 'Observable Operators',
      description: 'Nützliche Operatoren und Anwendungszwecke',
      url: 'lesson/6/operators-overview',
      type: 'angular'
    },
  ]

}
