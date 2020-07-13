import {Component, OnInit} from '@angular/core';
import {NavSearchService} from '../services/nav-search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public navSearchService: NavSearchService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.navSearchService.searchAction.subscribe(value => {
      this.router.navigate(['/photos'], {queryParams: {query: value}});
    });
  }

  void(): void {

  }
}
