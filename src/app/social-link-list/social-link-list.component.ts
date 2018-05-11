import { Component, OnInit } from '@angular/core';
import { SocialLink } from '../models/social-link.model';
import { GuitarService } from '../guitar.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-social-link-list',
  templateUrl: './social-link-list.component.html',
  styleUrls: ['./social-link-list.component.css'],
  providers: [GuitarService]
})
export class SocialLinkListComponent implements OnInit{
  constructor(private guitarService: GuitarService){}
  socialLinks: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.socialLinks = this.guitarService.getSocialLinks();
  }
}
