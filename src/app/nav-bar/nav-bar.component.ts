import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  homeTitle = "Romain H"
  items = [
    { name : "Me", path : "me" },
    { name : "Projects", path : "projects" },
    { name : "Contact", path : "contact" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
