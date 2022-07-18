import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-overview',
  templateUrl: './operators-overview.component.html',
  styleUrls: ['./operators-overview.component.scss']
})
export class OperatorsOverviewComponent implements OnInit {

  snippet = {
    observer: `const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};`,
    httpCache: `

    `
  }

  constructor() { }

  ngOnInit(): void {
  }

}
