/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultiStepAnimationComponent } from './multi-step-animation.component';

describe('MultiStepAnimationComponent', () => {
  let component: MultiStepAnimationComponent;
  let fixture: ComponentFixture<MultiStepAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiStepAnimationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
