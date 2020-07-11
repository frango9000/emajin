import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
