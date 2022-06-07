import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmComponentsComponent } from './am-components.component';

describe('AmComponentsComponent', () => {
  let component: AmComponentsComponent;
  let fixture: ComponentFixture<AmComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
