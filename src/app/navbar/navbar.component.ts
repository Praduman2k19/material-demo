import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  opened=false;
  opened1=false;
  openclose()
  {
    this.opened=!this.opened;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
