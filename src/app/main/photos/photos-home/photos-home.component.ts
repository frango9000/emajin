import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../../shared/services/photos.service';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';
import {Observable} from 'rxjs';
import {NavSearchService} from '../../../shared/services/nav-search.service';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.scss']
})
export class PhotosHomeComponent implements OnInit {

  photos: Observable<UnsplashPhoto[]>;

  constructor(private photoService: PhotosService,
              private navSearchService: NavSearchService) {
  }

  ngOnInit(): void {
    this.photos = this.photoService.getListPhotos();
    // this.navSearchService.searchChange.subscribe(value => console.log(value));
    this.navSearchService.searchAction.subscribe(value => console.log(value));
  }

}
