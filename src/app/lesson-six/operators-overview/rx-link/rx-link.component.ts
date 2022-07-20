import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rx-link',
  templateUrl: './rx-link.component.html',
  styleUrls: ['./rx-link.component.scss'],
})
export class RxLinkComponent implements OnInit {
  @Input() name;
  @Input() type;

  constructor() {}

  ngOnInit(): void {}
}
