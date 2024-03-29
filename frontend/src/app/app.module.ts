import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { HomeComponent } from './home/home.component';
import { CssLayoutExampleFlexComponent } from './lesson-two/css-layout-example-flex/css-layout-example-flex.component';
import { CssLayoutExampleGridComponent } from './lesson-two/css-layout-example-grid/css-layout-example-grid.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoost, ApolloBoostModule } from 'apollo-angular-boost';

@NgModule({
  declarations: [
    AppComponent,
    LessonTwoComponent,
    HomeComponent,
    CssLayoutExampleFlexComponent,
    CssLayoutExampleGridComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, HttpClientModule, ApolloBoostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(apolloBoost: ApolloBoost) {
    apolloBoost.create({
      uri: 'http://localhost:4000/graphql',
    });
  }
}
