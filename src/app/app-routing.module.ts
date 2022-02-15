import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lesson/1',
    component: LessonOneComponent
  },
  {
    path: 'lesson/2',
    component: LessonTwoComponent
  },
  {
    path: 'lesson/3',
    component: LessonThreeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
