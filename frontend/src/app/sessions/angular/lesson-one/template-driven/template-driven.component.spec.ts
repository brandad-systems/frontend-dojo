import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TemplateDrivenComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TemplateDrivenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save input data', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const bezeichnungInput = fixture.debugElement.query(By.css("input[name='bezeichnung']"));
      const submitButton = fixture.debugElement.query(By.css('button'));

      bezeichnungInput.nativeElement.value = 'Die kürzeste Geschichte der Zeit';
      bezeichnungInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      submitButton.nativeElement.click();

      expect(component.buecher.length).toBe(1);
      expect(component.buecher[0].bezeichnung).toBe('Die kürzeste Geschichte der Zeit');
    });
  }));
});
