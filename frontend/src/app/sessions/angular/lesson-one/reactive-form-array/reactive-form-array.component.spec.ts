import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormArrayComponent } from './reactive-form-array.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveFormArrayComponent', () => {
  let component: ReactiveFormArrayComponent;
  let fixture: ComponentFixture<ReactiveFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactiveFormArrayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
