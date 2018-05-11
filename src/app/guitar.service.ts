import { Injectable } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GuitarService {
  guitars: FirebaseListObservable<any[]>;
  guitarFilters: FirebaseListObservable<any[]>;
  socialLinks: FirebaseListObservable<any[]>;
  currentFilterTerm: string = "";


  constructor(private database: AngularFireDatabase) {
    // this.guitars = database.list('guitars');
    this.guitarFilters = database.list('guitar-filters');
    this.socialLinks = database.list('social-links');
  }

  getGuitars() {
    if (this.currentFilterTerm === "") {
      return this.guitars = this.database.list('guitars');
    } else if (this.currentFilterTerm === "hollow") {
      return this.guitars = this.database.list('guitars', {
        query: {
          orderByChild: 'category',
          equalTo: 'hollow'
        }
      });
    }
  }

  getGuitarFilters() {
    return this.guitarFilters;
  }

  getSocialLinks() {
    return this.socialLinks;
  }

  getGuitarById(guitarId: string){
    return this.database.object('guitars/' + guitarId)
  }

  setFilter(filterTerm) {
    this.currentFilterTerm = filterTerm;
  }

}
