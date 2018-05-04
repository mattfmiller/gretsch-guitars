import { Component, Input } from '@angular/core';
import { SocialLink } from '../models/social-link.model';

@Component({
  selector: 'app-social-link-list',
  templateUrl: './social-link-list.component.html',
  styleUrls: ['./social-link-list.component.css']
})
export class SocialLinkListComponent {
  @Input() childSocialLinkArray: SocialLink [];
}
