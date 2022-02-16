import {Component} from '@angular/core';

@Component({
  selector: 'app-template-driven-form-array-like',
  template: `
      <h1>Bücherverzeichnis - Template Driven</h1>

      <form #buchFormular="ngForm" (ngSubmit)="buecher.push(buchFormular.value)">
        <label>Bezeichnung</label>
        <input autocomplete="off" type="text" name="bezeichnung" ngModel>
        <label>ISBN</label>
        <input autocomplete="off" type="text" name="isbn" ngModel>
        <div>
          <span>Autoren</span>
          <button type="button" (click)="addAutor()">+ Autor hinzufügen</button>

          <div *ngFor="let autor of autoren; let i=index">
            <!-- The repeated alias template -->
            <label for="autor-{{ autor }}">Autor:</label>
            <input id="autor-{{ autor }}" name="author-{{ autor }}" type="text" ngModel required>
          </div>
        </div>
        <button type="submit" [disabled]="!buchFormular.valid">Produkt hinzufügen</button>
      </form>

      <div *ngFor="let buch of buecher">
        {{buch | json}}
      </div>
    `
})
export class TemplateDrivenFormArrayLikeComponent {
  autoren = [];

  addAutor() {
    let index = this.autoren.slice(-1)[0];
    this.autoren.push(index + 1)
  }

  buecher = [];
}



