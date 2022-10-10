import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  template: `
    <h1>Bücherverzeichnis - Reactive</h1>

    <form [formGroup]="buchFormular" (ngSubmit)="buecher.push(buchFormular.value)">
      <label>Bezeichnung</label>
      <input autocomplete="off" type="text" formControlName="bezeichnung" maxlength="" />
      <label>ISBN</label>
      <input autocomplete="off" type="text" formControlName="isbn" />
      <div formArrayName="authors">
        <span>Autoren</span>
        <button type="button" (click)="addAutor()">+ Autor hinzufügen</button>

        <div *ngFor="let autor of autoren.controls; let i = index">
          <!-- The repeated alias template -->
          <label for="autor-{{ i }}">Autor:</label>
          <input id="autor-{{ i }}" type="text" [formControlName]="i" required />
        </div>
      </div>
      <button type="submit" [disabled]="!buchFormular">Produkt hinzufügen</button>
    </form>

    <div *ngFor="let buch of buecher">
      {{ buch | json }}
    </div>
  `,
})
export class ReactiveFormArrayComponent {
  buchFormular = new UntypedFormGroup({
    bezeichnung: new UntypedFormControl(),
    isbn: new UntypedFormControl(),
    authors: new UntypedFormArray([]),
  });

  get autoren() {
    return this.buchFormular.get('authors') as UntypedFormArray;
  }

  addAutor() {
    this.autoren.push(new UntypedFormControl());
  }

  buecher = [];
}
