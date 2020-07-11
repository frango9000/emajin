import {Injectable} from '@angular/core';
import {UnsplashService} from './unsplash.service';
import {from, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UnsplashPhoto} from '../domain/unsplash-photo';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private unsplashService: UnsplashService) {
  }

  public getListPhotos(): Observable<UnsplashPhoto[]> {
    // @ts-ignore
    return from(this.unsplashService.unsplash().photos.listPhotos(1, 50).then(response => response.json())
    ).pipe(
      tap(source => console.log(source))
    );
  }
}

