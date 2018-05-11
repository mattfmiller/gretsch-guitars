import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css'],
  providers: [GuitarService]
})
export class GuitarListComponent implements OnInit{

  constructor(private router: Router, private guitarService: GuitarService){}
  guitars: FirebaseListObservable<any[]>;


  ngOnInit(){
    this.guitars = this.guitarService.getGuitars();
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
