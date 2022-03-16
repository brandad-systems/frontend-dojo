/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CssLayoutExampleFlexComponent } from './css-layout-example-flex.component';

describe('CssLayoutExampleFlexComponent', () => {
  let component: CssLayoutExampleFlexComponent;
  let fixture: ComponentFixture<CssLayoutExampleFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssLayoutExampleFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLayoutExampleFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
