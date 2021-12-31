import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() start: boolean = false;
  @Input() end: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
