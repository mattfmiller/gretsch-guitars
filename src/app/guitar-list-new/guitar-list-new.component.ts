import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-list-new',
  templateUrl: './guitar-list-new.component.html',
  styleUrls: ['./guitar-list-new.component.css'],
  providers: [GuitarService]
})
export class GuitarListNewComponent implements OnInit {

  constructor(private router: Router, private guitarService: GuitarService){}
  newGuitars: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.newGuitars = this.guitarService.getNewGuitars();
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
