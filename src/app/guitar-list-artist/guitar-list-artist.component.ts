import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-list-artist',
  templateUrl: './guitar-list-artist.component.html',
  styleUrls: ['./guitar-list-artist.component.css'],
  providers: [GuitarService]
})
export class GuitarListArtistComponent implements OnInit {

  constructor(private router: Router, private guitarService: GuitarService){}
  artistGuitars: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.artistGuitars = this.guitarService.getArtistGuitars();
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
