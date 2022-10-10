import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { RbacComponent } from './lesson-six/rbac/rbac.component';
import { UserInputComponent } from './lesson-six/user-input/user-input.component';
import { RoutingComponent } from './lesson-six/routing/routing.component';
import { SaveIndicatorComponent } from './lesson-six/save-indicator/save-indicator.component';
import { RxLinkComponent } from './lesson-six/operators-overview/rx-link/rx-link.component';
import { OperatorsOverviewComponent } from './lesson-six/operators-overview/operators-overview.component';
import { LessonSixComponent } from './lesson-six/lesson-six.component';
import { ReactiveComponent } from '../angular/lesson-one/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';

@NgModule({
  declarations: [
    LessonThreeComponent,
    RxjsComponent,
    RbacComponent,
    UserInputComponent,
    RoutingComponent,
    SaveIndicatorComponent,
    RxLinkComponent,
    OperatorsOverviewComponent,
    LessonSixComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, SharedModule, RxjsRoutingModule],
})
export class RxjsModule {}
