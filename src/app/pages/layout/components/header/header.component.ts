import { Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isPayer!:boolean;
  
  @Output() public sidenavToggle = new EventEmitter();
  defaultHeader = false;
  scrolled: boolean = false;
  showBlackIcon = false;

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {}


 

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}


