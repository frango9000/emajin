import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavSearchService {

  searchAction: Subject<string> = new Subject<string>();
  searchChange: Subject<string> = new Subject<string>();

  private searchActionActive = true;

  constructor() {
  }

  searchInputChange(search: HTMLInputElement): void {
    this.searchChange.next(search.value);
  }

  searchInputAction(search: HTMLInputElement): void {
    if (this.searchActionActive) {
      this.searchAction.next(search.value);
    }
  }

  disableAction() {
    this.searchActionActive = false;
  }

  enableAction() {
    this.searchActionActive = true;
  }
}
