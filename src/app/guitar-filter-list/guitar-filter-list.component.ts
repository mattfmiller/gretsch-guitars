import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuitarFilter } from '../models/guitar-filter.model';

@Component({
  selector: 'app-guitar-filter-list',
  templateUrl: './guitar-filter-list.component.html',
  styleUrls: ['./guitar-filter-list.component.css']
})
export class GuitarFilterListComponent {
  @Input() childGuitarFilterArray: GuitarFilter [];
  @Output() clickedGuitarFilterComponent = new EventEmitter();

  guitarFilterClicked(clickedFilterTerm: string) {
    console.log(clickedFilterTerm);
    this.clickedGuitarFilterComponent.emit(clickedFilterTerm);
  }
}
