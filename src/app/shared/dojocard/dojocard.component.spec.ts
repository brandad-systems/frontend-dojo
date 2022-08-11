import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojocardComponent } from './dojocard.component';

describe('DojocardComponent', () => {
  let component: DojocardComponent;
  let fixture: ComponentFixture<DojocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DojocardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DojocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
