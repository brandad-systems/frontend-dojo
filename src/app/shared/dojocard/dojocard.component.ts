import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../stories/User';

@Component({
  selector: 'app-dojocard',
  templateUrl: './dojocard.component.html',
  styleUrls: ['./dojocard.component.scss'],
})
export class DojocardComponent implements OnInit {
  @Input()
  title: string | undefined;
  @Input()
  subtitle: string | undefined;
  @Input()
  user: User | undefined = {
    name: undefined,
    age: undefined,
  };

  constructor() {}

  ngOnInit(): void {}
}
