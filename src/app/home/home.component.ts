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
      title: 'Third',
      description: 'Third Description',
      url: 'lesson/3',
      type: 'html5'
    }
  ]

}
