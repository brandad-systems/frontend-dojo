import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphqlComponent } from './graphql.component';
import { LessonSevenComponent } from './lesson-seven/lesson-seven.component';

const routes: Routes = [
  { path: '', component: GraphqlComponent },
  {
    path: 'graphql',
    component: LessonSevenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphqlRoutingModule {}
