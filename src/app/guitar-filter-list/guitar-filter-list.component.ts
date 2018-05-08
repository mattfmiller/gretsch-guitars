import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuitarFilter } from '../models/guitar-filter.model';

@Component({
  selector: 'app-guitar-filter-list',
  templateUrl: './guitar-filter-list.component.html',
  styleUrls: ['./guitar-filter-list.component.css']
})
export class GuitarFilterListComponent {
  // @Input() childGuitarFilterArray: GuitarFilter [];
  @Output() clickedGuitarFilterComponent = new EventEmitter();

  childGuitarFilterArray: GuitarFilter[] = [
    new GuitarFilter("NEWEST MODELS", "SEE THE LATEST", "../assets/newest.jpg"),
    new GuitarFilter("THE BIG BODY SOUND", "VIEW HOLLOW BODIES", "../assets/hollow.jpg"),
    new GuitarFilter("ARTIST MODELS", "VIEW ARTIST SIGNATURES", "../assets/artist.jpg"),
  ];

  guitarFilterClicked(clickedFilterTerm: string) {
    this.clickedGuitarFilterComponent.emit(clickedFilterTerm);
  }
}
