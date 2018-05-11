import { Component, Input } from '@angular/core';
import { SocialLink } from '../models/social-link.model';

@Component({
  selector: 'app-social-link-list',
  templateUrl: './social-link-list.component.html',
  styleUrls: ['./social-link-list.component.css']
})
export class SocialLinkListComponent {

  masterSocialLinkArray: SocialLink[] = [
    new SocialLink("INSTAGRAM", "../assets/instagram.jpg", "https://www.instagram.com/officialgretsch/"),
    new SocialLink("FACEBOOK", "../assets/facebook.jpg", "https://www.facebook.com/GretschGuitars"),
    new SocialLink("YOUTUBE", "../assets/youtube.jpg", "https://www.youtube.com/user/gretschguitars/"),
    new SocialLink("ARTISTS", "../assets/artists.jpg", "https://gretschguitars.com/artists")
  ]
}
