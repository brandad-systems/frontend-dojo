import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxLinkComponent } from './rx-link.component';

describe('RxLinkComponent', () => {
  let component: RxLinkComponent;
  let fixture: ComponentFixture<RxLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
