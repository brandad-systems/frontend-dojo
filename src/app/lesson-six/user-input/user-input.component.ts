import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, Observable, of, retry, startWith } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  snippet = {
    userInputHtml: `<input [formControl]="searchInput">
<ng-container *ngIf="(searchResult$ | async) as resultWrapper">
  <span *ngIf="resultWrapper.loading">Loading...</span>
  <span *ngIf="resultWrapper.error" style="color: red">{{resultWrapper.error}}</span>
  <div *ngFor="let result of resultWrapper.results">{{result}}</div>
</ng-container>`,
    userInput: `searchResult$: Observable<{loading: boolean, results:string[], error:string}>;
searchInput = new FormControl('');

ngOnInit(): void {
  this.searchResult$ = this.searchInput.valueChanges.pipe(
    filter(Boolean),
    map(search => search.trim()),
    debounceTime(200),
    distinctUntilChanged(),
    filter(search => search !== ''),
    switchMap(search => this.searchService.search(search).pipe(
      retry(3),
      map(this.wrapResult()),
      startWith(this.loading),
      catchError(this.wrapError())
    )),
  )
}`,
  };

  constructor(private searchService: SearchService) {}

  loading = { loading: true, results: [], error: '' };

  searchResult$: Observable<{ loading: boolean; results: string[]; error: string }>;
  searchInput = new FormControl('');

  ngOnInit(): void {
    this.searchResult$ = this.searchInput.valueChanges.pipe(
      filter(Boolean),
      map((search) => search.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      filter((search) => search !== ''),
      switchMap((search) =>
        this.searchService
          .search(search)
          .pipe(retry(3), map(this.wrapResult()), startWith(this.loading), catchError(this.wrapError()))
      )
    );
  }

  private wrapResult() {
    return (result) => {
      return {
        loading: false,
        results: result,
        error: '',
      };
    };
  }

  private wrapError() {
    return (error) => {
      return of({
        loading: false,
        results: [],
        error: error,
      });
    };
  }
}
