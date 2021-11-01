import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getRoute() {
    return this.router.url;
  }
}
