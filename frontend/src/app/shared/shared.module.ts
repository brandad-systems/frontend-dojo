import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCodeDirective } from './highlight.directive';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [HighlightCodeDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  exports: [
    HighlightCodeDirective,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
