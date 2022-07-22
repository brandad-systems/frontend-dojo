import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent implements OnInit {
  snippet = {
    routing: `constructor(private route: ActivatedRoute) { }

values$ = this.route.paramMap.pipe(
  distinctUntilChanged(),
  switchMap(map => service.getDate(map.get('id')))
)`,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
