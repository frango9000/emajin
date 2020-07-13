import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersDetailComponent} from './users-detail/users-detail.component';
import {NgImageFullscreenViewModule} from 'ng-image-fullscreen-view';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxScrollTopModule} from 'ngx-scrolltop';
import {PhotosModule} from '../photos/photos.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [UsersDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgImageFullscreenViewModule,
    MDBBootstrapModule.forRoot(),
    NgxScrollTopModule,
    PhotosModule,
    InfiniteScrollModule,
  ]
})
export class UsersModule {
}
