import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';
import {PhotosService} from '../../../shared/services/photos.service';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.scss']
})
export class PhotosDetailComponent implements OnInit {
  private id: string;
  public photo: UnsplashPhoto;

  public showFlag: boolean;
  images: Array<object> = [];

  constructor(private route: ActivatedRoute,
              private photoService: PhotosService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['photo_id'];
        this.photoService.getPhoto(this.id).subscribe(photo => {
          this.photo = photo;
          this.images = new Array({
            image: this.photo.urls.full,
            thumbImage: this.photo.urls.thumb,
            alt: this.photo.description,
            title: this.photo.description
          });
        });

      }
    );

  }

  showLightbox(): void {
    this.showFlag = true;
  }

  closeEventHandler(): void {
    this.showFlag = false;
  }

  showInfo(): void {

  }
}
