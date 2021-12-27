import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  defaultHeader = false;

  constructor(

  ) { }

  ngOnInit(): void {
  }


}
