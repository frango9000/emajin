import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UnsplashPhoto} from '../domain/unsplash-photo';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {UnsplashUser} from '../domain/unsplash-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getUser(user: string): Observable<UnsplashUser> {
    return this.httpClient.get<UnsplashUser>(environment.apiUrl + '/users/' + user).pipe(
      tap(source => console.log(source))
    );
  }

  public getUserPhotos(user: string, page = 1, perPage = 24, orderBy: 'latest' | 'oldest' | 'popular' = 'latest'): Observable<UnsplashPhoto[]> {
    const pageParams: HttpParams = new HttpParams()
      .append('page', String(page))
      .append('per_page', String(perPage))
      .append('order_by', orderBy);
    return this.httpClient.get<UnsplashPhoto[]>(environment.apiUrl + '/users/' + user + '/photos', {params: pageParams}).pipe(
      tap(source => console.log(source))
    );
  }
}
