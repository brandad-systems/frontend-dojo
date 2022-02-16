import {Component} from '@angular/core';

@Component({
  selector: 'app-template-driven',
  template: `
    <h1>Bücherverzeichnis - Template Driven</h1>

    <form #buchFormular="ngForm" (ngSubmit)="buecher.push(buchFormular.value)">
      <label>Bezeichnung</label>
      <input autocomplete="off" type="text" name="bezeichnung" ngModel required>
      <label>ISBN</label>
      <input autocomplete="off" type="text" name="isbn" ngModel>
      <button type="submit" [disabled]="!buchFormular.valid">Produkt hinzufügen</button>
    </form>

    <div *ngFor="let buch of buecher">
      {{buch | json}}
    </div>
  `
})
export class TemplateDrivenComponent {
  buecher = [];
}
