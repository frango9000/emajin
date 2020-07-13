import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from '../../../shared/services/photos.service';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';
import {NavSearchService} from '../../../shared/services/nav-search.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {UnsplashSearch} from '../../../shared/domain/unsplash-search';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.scss']
})
export class PhotosHomeComponent implements OnInit, OnDestroy {

  photos: UnsplashPhoto[] = [];

  unsplashSearch = new UnsplashSearch();

  subscription: Subscription;

  constructor(private photoService: PhotosService,
              private navSearchService: NavSearchService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.navSearchService.disableAction();

    const q = this.route.snapshot.queryParamMap.get('query');
    this.unsplashSearch.query = q ? q : '';

    this.subscription = this.navSearchService.searchChange.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.unsplashSearch.query = value;
      this.unsplashSearch.page = 1;
      this.fetchBooks();
    });
    this.fetchBooks();
  }

  ngOnDestroy(): void {
    this.navSearchService.enableAction();
    this.subscription.unsubscribe();
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
