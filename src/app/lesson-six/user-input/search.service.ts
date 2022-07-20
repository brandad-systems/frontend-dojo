import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  terms = [
    'Gottfried Benn: Nur zwei Dinge',
    'Bertolt Brecht: Erinnerung an die Marie A.',
    'Paul Celan: Todesfuge',
    'Allen Ginsberg: Howl',
    'Johann Wolfgang von Goethe: Erlkönig, Der Zauberlehrling, Prometheus, Römische Elegien',
    'Hermann Hesse: Stufen',
    'Hugo von Hofmannsthal: Gedichte in Terzinen, Ballade des äußeren Lebens',
    'Friedrich Hölderlin: Hälfte des Lebens, Brod und Wein, Patmos, Hyperions Schicksalslied',
    'Ernst Jandl: schtzngrmm, wien: heldenplatz',
    'Matsuo Bashō: Frosch-Haiku',
    'Edgar Allan Poe: The Raven',
    'Rainer Maria Rilke: Der Panther, Herbsttag, Duineser Elegien',
    'Percy Bysshe Shelley: Ozymandias',
    'Georg Trakl: Grodek',
  ];

  constructor() {}

  search(searchTerm): Observable<string[]> {
    console.log('called', new Date());
    if (Math.random() > 0.5) {
      return throwError(() => new Error('Suche nicht erfolgreich')).pipe(delay(1500));
    }
    const results = this.terms.filter((term) => term.indexOf(searchTerm) > 0);
    return of(results).pipe(delay(1500));
  }
}
