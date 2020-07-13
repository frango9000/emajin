import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnsplashPhoto} from '../../../shared/domain/unsplash-photo';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../../../shared/services/users.service';
import {UnsplashUser} from '../../../shared/domain/unsplash-user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit, OnDestroy {
  private username: string;
  public user: UnsplashUser;

  public showFlag: boolean;
  images: Array<object> = [];


  photos: UnsplashPhoto[] = [];
  subscription: Subscription;
  page = 1;

  constructor(private route: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params['user'];
        this.userService.getUser(this.username).subscribe(user => {
          this.user = user;
          this.fetchUserPhotos();
          this.images = new Array({
            image: this.user.profile_image.large,
            thumbImage: this.user.profile_image.small,
            alt: this.user,
            title: this.user
          });
        });
      }
    );

  }

  private fetchUserPhotos(): void {
    this.subscription = this.userService.getUserPhotos(this.user.username, this.page).subscribe(value => {
      this.photos.push(...value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showLightbox(): void {
    this.showFlag = true;
  }

  closeEventHandler(): void {
    this.showFlag = false;
  }

  loadMore(): void {
    this.page++;
    this.fetchUserPhotos();
  }

}
