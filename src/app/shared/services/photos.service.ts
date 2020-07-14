import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UnsplashPhoto} from '../domain/unsplash-photo';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UnsplashSearch} from '../domain/unsplash-search';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) {
  }

  public getListPhotos(page = 1, perPage = 24, orderBy: 'latest' | 'oldest' | 'popular' = 'latest'): Observable<UnsplashPhoto[]> {
    const pageParams: HttpParams = new HttpParams()
      .append('page', String(page))
      .append('per_page', String(perPage))
      .append('order_by', orderBy);
    return this.httpClient.get<UnsplashPhoto[]>(environment.apiUrl + '/photos', {params: pageParams}).pipe(
      // tap(source => console.log(source))
    );
  }

  public getPhoto(photoId: string): Observable<UnsplashPhoto> {
    return this.httpClient.get<UnsplashPhoto>(environment.apiUrl + '/photos/' + photoId).pipe(
      // tap(source => console.log(source))
    );
  }

  public searchPhotos(unsplashSearch: UnsplashSearch)
    : Observable<UnsplashPhoto[]> {
    let pageParams: HttpParams = new HttpParams()
      .append('query', String(unsplashSearch.query))
      .append('page', String(unsplashSearch.page))
      .append('per_page', String(unsplashSearch.perPage));
    if (unsplashSearch.color) {
      pageParams = pageParams.append('color', unsplashSearch.color);
    }
    if (unsplashSearch.orientation) {
      pageParams = pageParams.append('orientation', unsplashSearch.orientation);
    }
    return this.httpClient.get<any>(environment.apiUrl + '/search/photos', {params: pageParams}).pipe(
      map(response => response.results),
      // tap(source => console.log(source))
    );
  }

}

