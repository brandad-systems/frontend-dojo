import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../angular-material/material.module';
import { LessonFourComponent } from './lesson-four/lesson-four.component';
import { SimpleAnimationComponent } from './lesson-four/simple-animation/simple-animation.component';
import { MultiStepAnimationComponent } from './lesson-four/multi-step-animation/multi-step-animation.component';
import { SequentialAnimationComponent } from './lesson-four/sequential-animation/sequential-animation.component';
import { LessonFiveComponent } from './lesson-five/lesson-five.component';
import { AmTypographyComponent } from './lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from './lesson-five/am-components/am-components.component';
import { AmOverviewComponent } from './lesson-five/am-overview/am-overview.component';
import { TemplateDrivenComponent } from './lesson-one/template-driven/template-driven.component';
import { ReactiveComponent } from './lesson-one/reactive/reactive.component';
import { ReactiveFormArrayComponent } from './lesson-one/reactive-form-array/reactive-form-array.component';
import { TemplateDrivenFormArrayLikeComponent } from './lesson-one/template-driven-form-array-like/template-driven-form-array-like.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonThreeComponent } from '../rxjs/lesson-three/lesson-three.component';

@NgModule({
  declarations: [
    AngularComponent,
    LessonOneComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFormArrayComponent,
    TemplateDrivenFormArrayLikeComponent,
    LessonFourComponent,
    SimpleAnimationComponent,
    MultiStepAnimationComponent,
    SequentialAnimationComponent,
    LessonFiveComponent,
    AmTypographyComponent,
    AmComponentsComponent,
    AmOverviewComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, AngularRoutingModule],
})
export class AngularModule {}
