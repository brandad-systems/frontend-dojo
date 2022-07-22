import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsOverviewComponent } from './operators-overview.component';

describe('OperatorsOverviewComponent', () => {
  let component: OperatorsOverviewComponent;
  let fixture: ComponentFixture<OperatorsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperatorsOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
