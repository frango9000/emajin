import {Component, Input, OnInit} from '@angular/core';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';

@Component({
  selector: 'app-photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.scss']
})
export class PhotosCardComponent implements OnInit {

  @Input() photo: UnsplashPhoto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
