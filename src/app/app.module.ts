import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LessonOneComponent} from './lesson-one/lesson-one.component';
import {LessonTwoComponent} from './lesson-two/lesson-two.component';
import {LessonThreeComponent} from './lesson-three/lesson-three.component';
import {HomeComponent} from './home/home.component';
import {TemplateDrivenComponent} from './lesson-one/template-driven/template-driven.component';
import {ReactiveComponent} from './lesson-one/reactive/reactive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormArrayComponent } from './lesson-one/reactive-form-array/reactive-form-array.component';
import { TemplateDrivenFormArrayLikeComponent } from './lesson-one/template-driven-form-array-like/template-driven-form-array-like.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CssLayoutExampleFlexComponent } from './lesson-two/css-layout-example-flex/css-layout-example-flex.component';
import { CssLayoutExampleGridComponent } from './lesson-two/css-layout-example-grid/css-layout-example-grid.component';
import { LessonFourComponent } from './lesson-four/lesson-four.component';
import { SimpleAnimationComponent } from './lesson-four/simple-animation/simple-animation.component';
import { SequentialAnimationComponent } from './lesson-four/sequential-animation/sequential-animation.component';
import { MultiStepAnimationComponent } from './lesson-four/multi-step-animation/multi-step-animation.component';
import { LessonFiveComponent } from './lesson-five/lesson-five.component';
import { MaterialModule } from "./angular-material/material.module";
import { AmTypographyComponent } from './lesson-five/am-typography/am-typography.component';
import { AmComponentsComponent } from './lesson-five/am-components/am-components.component';
import { AmOverviewComponent } from './lesson-five/am-overview/am-overview.component';
import { OperatorsOverviewComponent } from './lesson-six/operators-overview/operators-overview.component';
import { LessonSixComponent } from './lesson-six/lesson-six.component';
import {HighlightCodeDirective} from "./shared/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    LessonOneComponent,
    LessonTwoComponent,
    LessonThreeComponent,
    HomeComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFormArrayComponent,
    TemplateDrivenFormArrayLikeComponent,
    CssLayoutExampleFlexComponent,
    CssLayoutExampleGridComponent,
    LessonFourComponent,
    SimpleAnimationComponent,
    MultiStepAnimationComponent,
    SequentialAnimationComponent,
    LessonFiveComponent,
    AmTypographyComponent,
    AmComponentsComponent,
    AmOverviewComponent,
    OperatorsOverviewComponent,
    LessonSixComponent,
    HighlightCodeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
