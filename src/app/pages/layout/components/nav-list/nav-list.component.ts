import { Component, OnInit } from '@angular/core';
import { NavListService } from './services/nav-list/nav-list.service';
import { NavItem } from './models/nav-item/nav-item';

@Component({
  selector: 'nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {


  navList: NavItem[] = [];

  constructor(
    private _NavListService: NavListService
  ) { }

  ngOnInit(): void {
    this.getNavList();
  }


  getNavList(): void {
    this.navList = this._NavListService.getNavList();
  }

}
