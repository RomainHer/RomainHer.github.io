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
    { name : "Home", path : "", icon : "fa fa-home" },
    { name : "Me", path : "me", icon : "fa fa-user" },
    { name : "Projects", path : "projects", icon : "fa fa-lightbulb" },
    { name : "Contact", path : "contact", icon : "fa fa-address-book" }
  ]
  isCollapsed = true
  widthIcon = "0px"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getRoute() {
    return this.router.url;
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed){
      this.widthIcon = "0px"
    } else {
      this.widthIcon = "40px"
    }
  }
}
