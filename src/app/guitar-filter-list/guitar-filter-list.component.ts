import { Component, OnInit } from '@angular/core';
import { GuitarFilter } from '../models/guitar-filter.model';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guitar-filter-list',
  templateUrl: './guitar-filter-list.component.html',
  styleUrls: ['./guitar-filter-list.component.css'],
  providers: [GuitarService]
})
export class GuitarFilterListComponent implements OnInit {
  constructor(private router: Router, private guitarService: GuitarService){}
  guitarFilters: FirebaseListObservable<any[]>;
  // guitars: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.guitarFilters = this.guitarService.getGuitarFilters();
  }
}
