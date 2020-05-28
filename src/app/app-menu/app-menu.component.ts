import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.sass']
})
export class AppMenuComponent implements OnInit {
  @Input('sidenav')
  sidenav: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
