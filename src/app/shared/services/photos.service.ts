import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UnsplashPhoto} from '../domain/unsplash-photo';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) {
  }

  public getListPhotos(page = 1, perPage = 30): Observable<UnsplashPhoto[]> {
    const pageParams: HttpParams = new HttpParams()
      .append('page', String(page))
      .append('size', String(perPage));
    return this.httpClient.get<UnsplashPhoto[]>(environment.apiUrl + '/photos', {params: pageParams}).pipe(
      tap(source => console.log(source))
    );
  }

  public getPhoto(photoId: string): Observable<UnsplashPhoto> {
    return this.httpClient.get<UnsplashPhoto>(environment.apiUrl + '/photos/' + photoId).pipe(
      tap(source => console.log(source))
    );
  }

}

