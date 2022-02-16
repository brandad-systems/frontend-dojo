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
      title: 'First',
      description: 'First Description',
      url: 'lesson/1'
    },
    {
      title: 'Second',
      description: 'Second Description',
      url: 'lesson/2'
    },
    {
      title: 'Third',
      description: 'Third Description',
      url: 'lesson/3'
    }
  ]

}
