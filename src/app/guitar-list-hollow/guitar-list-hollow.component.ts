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
  guitars: FirebaseListObservable<any[]>;
  // guitarCategory: string = null;
  // guitarsToDisplayByCategory;

  ngOnInit(){
    this.guitars = this.guitarService.getHollowGuitars();
    // this.route.params.forEach((urlParameters) => {
    //   this.guitarCategory = urlParameters['category'];
    // });
    // this.guitarsToDisplayByCategory = this.guitarService.getGuitarsByCategory(this.guitarCategory);
  }

  goToDetailPage(clickedGuitar) {
    this.router.navigate(['guitars', clickedGuitar.$key]);
  }
}
