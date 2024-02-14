import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openCloseMenu', [
      state('open', style({ 'background-color': 'rgb(201, 157, 242)', })),
      state('close', style({ 'background-color': 'black',})),
      transition('open => close', [
        animate('500ms ease-in-out')
      ]),
      transition('close => open', [
        animate('500ms ease-in-out')
      ]),
    
    ])
  ]
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
  menuAnimationState: 'open' | 'close' = 'open';
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
      this.menuAnimationState = 'open';
    } else {
      this.widthIcon = "40px"
      this.menuAnimationState = 'close';
    }
  }
}
