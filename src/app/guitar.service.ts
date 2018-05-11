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
    this.guitars = database.list('guitars');
    this.guitarFilters = database.list('guitar-filters');
    this.socialLinks = database.list('social-links');
  }

  getGuitars() {
    return this.guitars 
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

}
