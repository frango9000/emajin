import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosModule} from './photos/photos.module';
import {MainComponent} from './main.component';
import {UsersModule} from './users/users.module';

export const loadPhotosModule = () => PhotosModule;

export const loadUsersModule = () => UsersModule;

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'photos',
        pathMatch: 'full'
      },
      {
        path: 'photos',
        loadChildren: loadPhotosModule
      },
      {
        path: 'user',
        loadChildren: loadUsersModule
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
