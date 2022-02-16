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

@NgModule({
  declarations: [
    AppComponent,
    LessonOneComponent,
    LessonTwoComponent,
    LessonThreeComponent,
    HomeComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
