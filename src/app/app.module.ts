import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { MeViewComponent } from './me-view/me-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';

const appRoutes: Routes = [
  { path : '', component: HomeViewComponent },
  { path : 'me', component: MeViewComponent },
  { path : 'projects', component: ProjectsViewComponent },
  { path : 'contact', component: ContactViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
