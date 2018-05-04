import { Component } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { GuitarFilter } from './models/guitar-filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gretsch Guitars';
  filterTerm: string = "";

  masterGuitarArray: Guitar[] = [
    new Guitar("G6134T-CDG LIMITED EDITION PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400509846_gtr_frt_001_rr.png"),
    new Guitar("G6609TFM PLAYERS EDITION BROADKASTER® CENTER BLOCK DOUBLE-CUT WITH STRING-THRU BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400700878_gtr_frt_001_rr.png"), new Guitar("G6134T-58 VINTAGE SELECT ’58 PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10002/2400709805_gtr_frt_001_rr.png")
  ]

  masterGuitarFilterArray: GuitarFilter[] = [
    new GuitarFilter("NEWEST MODELS", "SEE THE LATEST", "../assets/newest.jpg"),
    new GuitarFilter("THE BIG BODY SOUND", "VIEW HOLLOW BODIES", "../assets/hollow.jpg"),
    new GuitarFilter("ARTIST MODELS", "VIEW ARTIST SIGNATURES", "../assets/artist.jpg"),
  ]

  runFilter(desiredFilterTerm) {
    this.filterTerm = desiredFilterTerm;
  }
}
