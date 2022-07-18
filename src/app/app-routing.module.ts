import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonFourComponent } from './lesson-four/lesson-four.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonFiveComponent } from "./lesson-five/lesson-five.component";
import { AmTypographyComponent } from './lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from "./lesson-five/am-components/am-components.component";
import { AmOverviewComponent } from './lesson-five/am-overview/am-overview.component';
import {OperatorsOverviewComponent} from "./lesson-six/operators-overview/operators-overview.component";
import {LessonSixComponent} from "./lesson-six/lesson-six.component";


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
  },
  {
    path: 'lesson/4',
    component: LessonFourComponent
  },
  {
    path: 'lesson/5',
    component: LessonFiveComponent,
    children: [
      {
        path: 'am-overview',
        component: AmOverviewComponent
      },
      {
        path: 'am-typography',
        component: AmTypographyComponent
      },
      {
        path: 'am-components',
        component: AmComponentsComponent
      }
    ]
  },
  {
    path: 'lesson/6',
    component: LessonSixComponent,
    children: [
      {
        path: 'operators-overview',
        component: OperatorsOverviewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
