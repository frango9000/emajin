import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../../shared/services/photos.service';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';
import {NavSearchService} from '../../../shared/services/nav-search.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {UnsplashSearch} from '../../../shared/domain/unsplash-search';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.scss']
})
export class PhotosHomeComponent implements OnInit {

  photos: UnsplashPhoto[] = [];

  unsplashSearch = new UnsplashSearch();


  constructor(private photoService: PhotosService,
              private navSearchService: NavSearchService) {
  }

  ngOnInit(): void {
    this.photoService.getListPhotos().subscribe(value => this.photos = value);
    this.navSearchService.searchChange.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.unsplashSearch.query = value;
      this.unsplashSearch.page = 1;
      this.fetchBooks();
    });
  }

  private fetchBooks(): void {
    let observable: Observable<UnsplashPhoto[]>;
    observable = (this.unsplashSearch.query.length > 0) ?
      this.photoService.searchPhotos(this.unsplashSearch) :
      this.photoService.getListPhotos(this.unsplashSearch.page);
    observable.subscribe(photos => {
      if (this.unsplashSearch.page === 1) {
        this.photos = photos;
      } else {
        this.photos.push(...photos);
      }
    });
  }

  loadMore(): void {
    this.unsplashSearch.page++;
    this.fetchBooks();
  }
}
