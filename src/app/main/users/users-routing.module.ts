import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDetailComponent} from './users-detail/users-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/photos'
  },
  {
    path: ':user',
    component: UsersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
