import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSixComponent } from './lesson-six.component';

describe('LessonSixComponent', () => {
  let component: LessonSixComponent;
  let fixture: ComponentFixture<LessonSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessonSixComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
