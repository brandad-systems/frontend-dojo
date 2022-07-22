import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormArrayLikeComponent } from './template-driven-form-array-like.component';
import { FormsModule } from '@angular/forms';

describe('TemplateDrivenFormArrayLikeComponent', () => {
  let component: TemplateDrivenFormArrayLikeComponent;
  let fixture: ComponentFixture<TemplateDrivenFormArrayLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TemplateDrivenFormArrayLikeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormArrayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
