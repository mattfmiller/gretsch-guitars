import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css'],
  providers: [GuitarService]
})
export class GuitarListComponent implements OnInit{

  constructor(private router: Router, private guitarService: GuitarService){}
  guitars: Guitar[];

  // guitars: Guitar[] = [
  //   new Guitar("G6134T-CDG LIMITED EDITION PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400509846_gtr_frt_001_rr.png", false, false, false, 1),
  //   new Guitar("G6609TFM PLAYERS EDITION BROADKASTER® CENTER BLOCK DOUBLE-CUT WITH STRING-THRU BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10001/2400700878_gtr_frt_001_rr.png", false, true, false, 2),
  //   new Guitar("G6134T-58 VINTAGE SELECT ’58 PENGUIN™ WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10002/2400709805_gtr_frt_001_rr.png", false, false, false, 3),
  //   new Guitar("G5230T ELECTROMATIC® JET™ FT SINGLE-CUT WITH BIGSBY®", "https://www.fmicassets.com/Damroot/GretschVert/10002/2507210506_gtr_frt_001_rr.png", true, false, false, 4),
  //   new Guitar('G6131MY-CS CUSTOM SHOP MALCOLM YOUNG "SALUTE" JET™', "https://www.fmicassets.com/Damroot/GretschVert/10001/2410106821_gtr_frt_001_rr.png", false, false, true, 5),
  // ]

  ngOnInit(){
    this.guitars = this.guitarService.getGuitars();
  }

  goToDetailPage(clickedGuitar: Guitar) {
    this.router.navigate(['guitars', clickedGuitar.id]);
  }
}
