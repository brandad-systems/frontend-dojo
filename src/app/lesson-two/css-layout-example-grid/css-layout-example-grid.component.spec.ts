/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CssLayoutExampleGridComponent } from './css-layout-example-grid.component';

describe('CssLayoutExampleGridComponent', () => {
  let component: CssLayoutExampleGridComponent;
  let fixture: ComponentFixture<CssLayoutExampleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssLayoutExampleGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLayoutExampleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
