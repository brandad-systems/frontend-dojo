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
    TemplateDrivenFormArrayLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
