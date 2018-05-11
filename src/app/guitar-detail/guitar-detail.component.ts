import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Guitar } from '../models/guitar.model';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-guitar-detail',
  templateUrl: './guitar-detail.component.html',
  styleUrls: ['./guitar-detail.component.css'],
  providers: [GuitarService]
})
export class GuitarDetailComponent implements OnInit {
  guitarId: number = null;
  guitarToDisplay: Guitar;

  constructor(private route: ActivatedRoute, private location: Location, private guitarService: GuitarService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.guitarId = parseInt(urlParameters['id']);
    });
    this.guitarToDisplay = this.guitarService.getGuitarById(this.guitarId);
  }

}
