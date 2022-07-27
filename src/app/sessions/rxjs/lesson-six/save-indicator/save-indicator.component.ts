import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { fromEvent, of, merge, empty, concat, defer, EMPTY } from 'rxjs';
import {
  delay,
  map,
  mergeMap,
  tap,
  debounceTime,
  distinctUntilChanged,
  mapTo,
  filter,
  share,
  switchAll,
} from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-save-indicator',
  templateUrl: './save-indicator.component.html',
  styleUrls: ['./save-indicator.component.scss'],
})
export class SaveIndicatorComponent implements OnInit {
  snippet = {
    saveIndicatorHtml: `<input style="width: 100%" [formControl]="input" type="text">
<span>{{saveStatus$ | async}}</span>`,
    saveIndicator: `input = new FormControl('');
savesInProgress = 0;

// fake save request
saveChanges = value => {
  return of(value).pipe(delay(1500));
};

/**
 * Trigger a save when the user stops typing for 200ms
 * After new data has been successfully saved, so a saved
 * and last updated indicator.
 */
inputToSave$ = this.input.valueChanges.pipe(
  debounceTime(200),
  distinctUntilChanged(),
  share()
);

savesInProgress$ = this.inputToSave$.pipe(
  mapTo(of('Saving')),
  tap(_ => this.savesInProgress++)
);

savesCompleted$ = this.inputToSave$.pipe(
  mergeMap(this.saveChanges),
  tap(_ => this.savesInProgress--),
  // ignore if additional saves are in progress
  filter(_ => !this.savesInProgress),
  mapTo(
    concat(
      // display saved for 2s
      of('Saved!'),
      EMPTY.pipe(delay(2000)),
      // then last updated time, defer for proper time
      defer(() => of('Last updated: ' + formatDate(Date.now(), 'MM/dd/YYYY hh:mm', 'en-US') + '}'))
    )
  )
);

saveStatus$ = merge(this.savesInProgress$, this.savesCompleted$)
  .pipe(
    //If new save comes in when our completion observable is running, we want to switch to it for a status update.
    switchAll()
  )`,
  };

  constructor() {}

  ngOnInit(): void {}

  input = new UntypedFormControl('');
  savesInProgress = 0;

  // fake save request
  saveChanges = (value) => {
    return of(value).pipe(delay(1500));
  };

  /**
   * Trigger a save when the user stops typing for 200ms
   * After new data has been successfully saved, so a saved
   * and last updated indicator.
   */
  inputToSave$ = this.input.valueChanges.pipe(debounceTime(200), distinctUntilChanged(), share());

  savesInProgress$ = this.inputToSave$.pipe(
    mapTo(of('Saving')),
    tap((_) => this.savesInProgress++)
  );

  savesCompleted$ = this.inputToSave$.pipe(
    mergeMap(this.saveChanges),
    tap((_) => this.savesInProgress--),
    // ignore if additional saves are in progress
    filter((_) => !this.savesInProgress),
    mapTo(
      concat(
        // display saved for 2s
        of('Saved!'),
        EMPTY.pipe(delay(2000)),
        // then last updated time, defer for proper time
        defer(() => of('Last updated: ' + formatDate(Date.now(), 'MM/dd/YYYY hh:mm', 'en-US') + '}'))
      )
    )
  );

  saveStatus$ = merge(this.savesInProgress$, this.savesCompleted$).pipe(
    //If new save comes in when our completion observable is running, we want to switch to it for a status update.
    switchAll()
  );
}
