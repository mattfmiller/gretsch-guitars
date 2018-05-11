import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarFilterListComponent } from './guitar-filter-list/guitar-filter-list.component';
import { SocialLinkListComponent } from './social-link-list/social-link-list.component';
// import { FilterResults } from './filter-results'
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';
import { FilteredGuitarListComponent } from './filtered-guitar-list/filtered-guitar-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    GuitarListComponent,
    GuitarFilterListComponent,
    SocialLinkListComponent,
    // FilterResults,
    WelcomeComponent,
    GuitarDetailComponent,
    FilteredGuitarListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
