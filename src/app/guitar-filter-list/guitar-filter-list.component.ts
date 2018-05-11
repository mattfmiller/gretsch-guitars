import { Component, OnInit } from '@angular/core';
import { GuitarFilter } from '../models/guitar-filter.model';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-filter-list',
  templateUrl: './guitar-filter-list.component.html',
  styleUrls: ['./guitar-filter-list.component.css'],
  providers: [GuitarService]
})
export class GuitarFilterListComponent implements OnInit {
  constructor(private guitarService: GuitarService){}
  guitarFilters: FirebaseListObservable<any[]>;

  // @Input() childGuitarFilterArray: GuitarFilter [];
  // @Output() clickedGuitarFilterComponent = new EventEmitter();

  // childGuitarFilterArray: GuitarFilter[] = [
  //   new GuitarFilter("NEWEST MODELS", "SEE THE LATEST", "../assets/newest.jpg"),
  //   new GuitarFilter("THE BIG BODY SOUND", "VIEW HOLLOW BODIES", "../assets/hollow.jpg"),
  //   new GuitarFilter("ARTIST MODELS", "VIEW ARTIST SIGNATURES", "../assets/artist.jpg"),
  // ];

  // guitarFilterClicked(clickedFilterTerm: string) {
  //   this.clickedGuitarFilterComponent.emit(clickedFilterTerm);
  // }

  ngOnInit() {
    this.guitarFilters = this.guitarService.getGuitarFilters();
  }

  passFilter(filterTerm: string) {
    this.guitarService.setFilter(filterTerm);
  }
}
