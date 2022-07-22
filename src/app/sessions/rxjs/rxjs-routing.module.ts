import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { LessonSixComponent } from './lesson-six/lesson-six.component';
import { OperatorsOverviewComponent } from './lesson-six/operators-overview/operators-overview.component';
import { RoutingComponent } from './lesson-six/routing/routing.component';
import { UserInputComponent } from './lesson-six/user-input/user-input.component';
import { RbacComponent } from './lesson-six/rbac/rbac.component';
import { SaveIndicatorComponent } from './lesson-six/save-indicator/save-indicator.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  {
    path: 'observables',
    component: LessonThreeComponent,
  },

  {
    path: 'operators',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
