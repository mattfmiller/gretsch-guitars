import { Component, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { Router } from '@angular/router';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css'],
  providers: [GuitarService]
})
export class GuitarListComponent implements OnInit{

  constructor(private router: Router, private guitarService: GuitarService, private location: Location, private route: ActivatedRoute,){}
  // guitars: FirebaseListObservable<any[]>;
  guitarCategory: string = null;
  guitarsToDisplayByCategory: FirebaseListObservable<any[]>;

  ngOnInit(){
    // this.guitars = this.guitarService.getGuitars();
    this.route.params.forEach((urlParameters) => {
      this.guitarCategory = urlParameters['category'];
    });
    this.guitarsToDisplayByCategory.push(this.guitarService.getGuitarsByCategory(this.guitarCategory));
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
