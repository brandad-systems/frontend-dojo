import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonFourComponent } from './lesson-four/lesson-four.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonFiveComponent } from './lesson-five/lesson-five.component';
import { AmTypographyComponent } from './lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from './lesson-five/am-components/am-components.component';
import { AmOverviewComponent } from './lesson-five/am-overview/am-overview.component';
import { OperatorsOverviewComponent } from './lesson-six/operators-overview/operators-overview.component';
import { LessonSixComponent } from './lesson-six/lesson-six.component';
import { RoutingComponent } from './lesson-six/routing/routing.component';
import { UserInputComponent } from './lesson-six/user-input/user-input.component';
import { RbacComponent } from './lesson-six/rbac/rbac.component';
import { SaveIndicatorComponent } from './lesson-six/save-indicator/save-indicator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lesson/angular/forms',
    component: LessonOneComponent,
  },
  {
    path: 'lesson/css/grid-and-flexbox',
    component: LessonTwoComponent,
  },
  {
    path: 'lesson/rxjs/observables',
    component: LessonThreeComponent,
  },
  {
    path: 'lesson/angular/animations',
    component: LessonFourComponent,
  },
  {
    path: 'lesson/angular/material',
    component: LessonFiveComponent,
    children: [
      {
        path: 'am-overview',
        component: AmOverviewComponent,
      },
      {
        path: 'am-typography',
        component: AmTypographyComponent,
      },
      {
        path: 'am-components',
        component: AmComponentsComponent,
      },
      {
        path: '**',
        component: AmOverviewComponent,
      },
    ],
  },
  {
    path: 'lesson/rxjs/operators',
    component: LessonSixComponent,
    children: [
      {
        path: 'operators-overview',
        component: OperatorsOverviewComponent,
      },
      {
        path: 'routing',
        component: RoutingComponent,
      },
      {
        path: 'user-input',
        component: UserInputComponent,
      },
      {
        path: 'rbac',
        component: RbacComponent,
      },
      {
        path: 'save-indicator',
        component: SaveIndicatorComponent,
      },
      {
        path: '**',
        component: OperatorsOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
