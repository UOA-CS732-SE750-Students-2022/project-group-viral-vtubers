import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search$: Subject<string>;

  constructor() {
    this.search$ = new Subject();
  }

  setSearch(search: string) {
    this.search$.next(search);
  }

  getSearch(): Observable<string> {
    return this.search$.asObservable();
  }
}
