/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SequentialAnimationComponent } from './sequential-animation.component';

describe('SequentialAnimationComponent', () => {
  let component: SequentialAnimationComponent;
  let fixture: ComponentFixture<SequentialAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequentialAnimationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequentialAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
