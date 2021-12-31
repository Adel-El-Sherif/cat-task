import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-tabs',
  templateUrl: './side-tabs.component.html',
  styleUrls: ['./side-tabs.component.scss']
})
export class SideTabsComponent implements OnInit {

  tabIcons: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.setTabIcons();
  }


  setTabIcons(): void {
    for (let index = 1; index < 6; index++) {
      this.tabIcons.push(`assets/media/dashboard/tab-icons/tab-${index}.png`)
    }
  }

}
