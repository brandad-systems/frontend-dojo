import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-overview',
  templateUrl: './operators-overview.component.html',
  styleUrls: ['./operators-overview.component.scss'],
})
export class OperatorsOverviewComponent implements OnInit {
  snippet = {
    observable: `observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

observable = of([1, 2, 3, 4]).pipe(
  map(number => number * 2)
);

subscription = observable.subscribe(observer)

subject = new BehaviorSubject('startValue')

this.subject.next('anotherValue')

observableFromSubject = subject.asObservable()
`,

    promise: `// promise wird einmal ausgeführt
observableFromPromise = of(promise)

// promise wird für jeden Subscriber ausgeführt
coldObservableFromPromise = defer(() => promise)

// auch andere Operatoren nehmen Promises an
observable = forkJoin([
  of(1, 2, 3, 4),
  Promise.resolve(8),
  timer(4000)
]);

// Observable zu einem Promise wandeln mit dem letzten im Observable ausgegebenen Wert
promise = lastValueFrom(observable)

// Observable zu einem Promise wandeln mit dem ersten im Observable ausgegebenen Wert
promise = firstValueFrom(observable)
`,
  };

  constructor() {}

  ngOnInit(): void {}
}
