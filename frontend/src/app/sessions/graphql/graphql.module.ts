import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphqlRoutingModule } from './graphql-routing.module';
import { GraphqlComponent } from './graphql.component';
import { LessonSevenComponent } from './lesson-seven/lesson-seven.component';

@NgModule({
  declarations: [
    GraphqlComponent,
    LessonSevenComponent
  ],
  imports: [CommonModule, GraphqlRoutingModule],
})
export class GraphqlModule {}
