import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveComponent} from './reactive.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactiveComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save input data', () => {
    component.buchFormular.get('bezeichnung').setValue('Die kürzeste Geschichte der Zeit');
    component.submit();

    expect(component.buecher.length).toBe(1)
    expect(component.buecher[0].bezeichnung).toBe('Die kürzeste Geschichte der Zeit')
  })
});
