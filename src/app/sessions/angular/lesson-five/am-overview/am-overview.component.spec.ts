import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmOverviewComponent } from './am-overview.component';

describe('AmOverviewComponent', () => {
  let component: AmOverviewComponent;
  let fixture: ComponentFixture<AmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
