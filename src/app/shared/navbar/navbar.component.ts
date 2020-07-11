import {Component, OnInit} from '@angular/core';
import {NavSearchService} from '../services/nav-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public navSearchService: NavSearchService) {
  }

  ngOnInit(): void {
  }

}
