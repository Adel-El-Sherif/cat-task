import { Injectable } from '@angular/core';
import { NavItem } from '../../models/nav-item/nav-item';

@Injectable({
  providedIn: 'root'
})
export class NavListService {

  constructor() { }




  /**
   * @description To get nav items
   * @returns any[]
   */
  getNavList(): NavItem[] {
    return [
      {
        iconPath: 'assets/media/icons/dashboard.svg',
        iconPathActive: 'assets/media/icons/dashboard.svg',
        route: 'dashboard'
      },
      {
        iconPath: 'assets/media/icons/settings.svg',
        iconPathActive: 'assets/media/icons/settings.svg',
        route: 'settings'
      },
    ]
  }

}
