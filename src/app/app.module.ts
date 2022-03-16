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
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CssLayoutExampleFlexComponent } from './lesson-two/css-layout-example-flex/css-layout-example-flex.component';
import { CssLayoutExampleGridComponent } from './lesson-two/css-layout-example-grid/css-layout-example-grid.component';

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
    CssLayoutExampleGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
