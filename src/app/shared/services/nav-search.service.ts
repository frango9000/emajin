import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavSearchService {

  searchAction: Subject<string> = new Subject<string>();
  searchChange: Subject<string> = new Subject<string>();

  constructor() {
  }

  searchInputChange($event: Event): void {
    this.searchChange.next($event.target.value);
  }

  searchInputAction(search: HTMLInputElement) {
    this.searchAction.next(search.value);
  }
}
