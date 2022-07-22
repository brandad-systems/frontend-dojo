import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  template: `
    <h1>Bücherverzeichnis - Reactive</h1>

    <form [formGroup]="buchFormular" (ngSubmit)="submit()">
      <label>Bezeichnung</label>
      <input autocomplete="off" type="text" formControlName="bezeichnung" required />
      <label>ISBN</label>
      <input autocomplete="off" type="text" formControlName="isbn" />
      <button type="submit">Produkt hinzufügen</button>
    </form>

    <div *ngFor="let buch of buecher">
      {{ buch | json }}
    </div>
  `,
})
export class ReactiveComponent {
  buchFormular = new FormGroup({
    bezeichnung: new FormControl(),
    isbn: new FormControl(),
  });

  buecher = [];

  submit() {
    if (this.buchFormular.valid) {
      this.buecher.push(this.buchFormular.value);
    }
  }
}
