import {Injectable} from '@angular/core';
import Unsplash from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor() {
  }

  unsplash(): Unsplash {
    return new Unsplash({
      accessKey: 'm6Dq_dEKg2HOtJIVrVvqjqlz1MTLG3So0xLUnMy3GBw',
      // secret: '',
      // timeout: 500 // values set in ms
    });
  }
}
