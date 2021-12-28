import { Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isSidebarOpen: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }


  toggleSearchBar(): void {
    this.isSidebarOpen = !this.isSidebarOpen
  }

}


