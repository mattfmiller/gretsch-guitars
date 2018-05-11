import { Component } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { GuitarFilter } from './models/guitar-filter.model';
import { SocialLink } from './models/social-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gretsch Guitars';
  filterTerm: string = "";

  // masterGuitarArray: Guitar[] = [
  //   new Guitar("G6134T-CDG LIMITED EDITION PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400509846_gtr_frt_001_rr.png", false, false, false),
  //   new Guitar("G6609TFM PLAYERS EDITION BROADKASTER® CENTER BLOCK DOUBLE-CUT WITH STRING-THRU BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400700878_gtr_frt_001_rr.png", false, true, false),
  //   new Guitar("G6134T-58 VINTAGE SELECT ’58 PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10002/2400709805_gtr_frt_001_rr.png", false, false, false),
  //   new Guitar("G5230T ELECTROMATIC® JET™ FT SINGLE-CUT WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10002/2507210506_gtr_frt_001_rr.png", true, false, false),
  //   new Guitar('G6131MY-CS CUSTOM SHOP MALCOLM YOUNG "SALUTE" JET™', "https://www.fmicassets.com/Damroot/GretschVert/10001/2410106821_gtr_frt_001_rr.png", false, false, true),
  // ]

  // masterGuitarFilterArray: GuitarFilter[] = [
  //   new GuitarFilter("NEWEST MODELS", "SEE THE LATEST", "../assets/newest.jpg"),
  //   new GuitarFilter("THE BIG BODY SOUND", "VIEW HOLLOW BODIES", "../assets/hollow.jpg"),
  //   new GuitarFilter("ARTIST MODELS", "VIEW ARTIST SIGNATURES", "../assets/artist.jpg"),
  // ]

  // masterSocialLinkArray: SocialLink[] = [
  //   new SocialLink("INSTAGRAM", "../assets/instagram.jpg", "https://www.instagram.com/officialgretsch/"),
  //   new SocialLink("FACEBOOK", "../assets/facebook.jpg", "https://www.facebook.com/GretschGuitars"),
  //   new SocialLink("YOUTUBE", "../assets/youtube.jpg", "https://www.youtube.com/user/gretschguitars/"),
  //   new SocialLink("ARTISTS", "../assets/artists.jpg", "https://gretschguitars.com/artists")
  // ]

  runFilter(desiredFilterTerm) {
    this.filterTerm = desiredFilterTerm;
  }
}
