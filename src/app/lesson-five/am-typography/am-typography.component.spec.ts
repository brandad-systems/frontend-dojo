import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTypographyComponent } from './am-typography.component';

describe('AmTypographyComponent', () => {
  let component: AmTypographyComponent;
  let fixture: ComponentFixture<AmTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmTypographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
