import { Injectable } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GuitarService {
  guitars: FirebaseListObservable<any[]>;
  guitarFilters: FirebaseListObservable<any[]>;
  socialLinks: FirebaseListObservable<any[]>;
  currentFilterTerm: string;


  constructor(private database: AngularFireDatabase) {
    this.guitars = database.list('guitars');
    this.guitarFilters = database.list('guitar-filters');
    this.socialLinks = database.list('social-links');
  }

  getGuitars() {
    if (this.currentFilterTerm === "") {
      console.log("none");
      return this.guitars;
    } else if (this.currentFilterTerm === "hollowbody") {
      console.log("hollow");
      return this.guitars = this.database.list('guitars', {
        query: {
          orderByChild: 'category',
          equalTo: "hollowbody"
        }
      });
    } else {
      console.log("What?");
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

  // getGuitarsByCategory(guitarCategory: string){
  //   let returned = this.database.list('guitars/' + guitarCategory);
  //   return returned;
  // }

  setFilterTerm(passedFilterTerm){
    this.currentFilterTerm = passedFilterTerm;
    console.log(this.currentFilterTerm);
  }
}
