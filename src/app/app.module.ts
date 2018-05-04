import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarFilterListComponent } from './guitar-filter-list/guitar-filter-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SocialLinkListComponent } from './social-link-list/social-link-list.component';
// import { FilterResults } from './filter-results'


@NgModule({
  declarations: [
    AppComponent,
    GuitarListComponent,
    GuitarFilterListComponent,
    NewsListComponent,
    SocialLinkListComponent,
    // FilterResults
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
