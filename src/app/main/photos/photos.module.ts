import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosHomeComponent} from './photos-home/photos-home.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';
import {PhotosCardComponent} from './photos-card/photos-card.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    PhotosHomeComponent,
    PhotosDetailComponent,
    PhotosCardComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PhotosModule {
}
