import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-list-hollow',
  templateUrl: './guitar-list-hollow.component.html',
  styleUrls: ['./guitar-list-hollow.component.css'],
  providers: [GuitarService]
})
export class GuitarListHollowComponent implements OnInit {

  constructor(private router: Router, private guitarService: GuitarService){}
  hollowGuitars: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.hollowGuitars = this.guitarService.getHollowGuitars();
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
