import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonFourComponent } from './lesson-four/lesson-four.component';
import { LessonFiveComponent } from './lesson-five/lesson-five.component';
import { AmOverviewComponent } from './lesson-five/am-overview/am-overview.component';
import { AmTypographyComponent } from './lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from './lesson-five/am-components/am-components.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  {
    path: 'forms',
    component: LessonOneComponent,
  },
  {
    path: 'animations',
    component: LessonFourComponent,
  },
  {
    path: 'material',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
