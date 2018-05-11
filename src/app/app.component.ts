import { Component } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { GuitarFilter } from './models/guitar-filter.model';
import { SocialLink } from './models/social-link.model';
import { GuitarService } from './guitar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GuitarService]
})
export class AppComponent {
  constructor(private guitarService: GuitarService){}

  title = 'Gretsch Guitars';

}
