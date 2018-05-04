import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarFilterListComponent } from './guitar-filter-list/guitar-filter-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SocialLinkListComponent } from './social-link-list/social-link-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitarListComponent,
    GuitarFilterListComponent,
    NewsListComponent,
    SocialLinkListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
