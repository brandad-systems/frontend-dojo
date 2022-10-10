import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonFourComponent } from './sessions/angular/lesson-four/lesson-four.component';
import { LessonOneComponent } from './sessions/angular/lesson-one/lesson-one.component';
import { LessonThreeComponent } from './sessions/rxjs/lesson-three/lesson-three.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonFiveComponent } from './sessions/angular/lesson-five/lesson-five.component';
import { AmTypographyComponent } from './sessions/angular/lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from './sessions/angular/lesson-five/am-components/am-components.component';
import { AmOverviewComponent } from './sessions/angular/lesson-five/am-overview/am-overview.component';
import { OperatorsOverviewComponent } from './sessions/rxjs/lesson-six/operators-overview/operators-overview.component';
import { LessonSixComponent } from './sessions/rxjs/lesson-six/lesson-six.component';
import { RoutingComponent } from './sessions/rxjs/lesson-six/routing/routing.component';
import { UserInputComponent } from './sessions/rxjs/lesson-six/user-input/user-input.component';
import { RbacComponent } from './sessions/rxjs/lesson-six/rbac/rbac.component';
import { SaveIndicatorComponent } from './sessions/rxjs/lesson-six/save-indicator/save-indicator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'session/css/grid-and-flexbox',
    component: LessonTwoComponent,
  },
  { path: 'session/rxjs', loadChildren: () => import('./sessions/rxjs/rxjs.module').then((m) => m.RxjsModule) },
  {
    path: 'session/angular',
    loadChildren: () => import('./sessions/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'session/graphql',
    loadChildren: () => import('./sessions/graphql/graphql.module').then((m) => m.GraphqlModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
