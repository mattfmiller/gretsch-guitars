import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';
import { GuitarListHollowComponent } from './guitar-list-hollow/guitar-list-hollow.component';
import { GuitarListArtistComponent } from './guitar-list-artist/guitar-list-artist.component';
import { GuitarListNewComponent } from './guitar-list-new/guitar-list-new.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'guitarList',
    component: GuitarListComponent
  },
  {
    path: 'guitars/:id',
    component: GuitarDetailComponent
  },
  {
    path: 'guitarList/hollowbody',
    component: GuitarListHollowComponent
  },
  {
    path: 'guitarList/artist',
    component: GuitarListArtistComponent
  },
  {
    path: 'guitarList/',
    component: GuitarListNewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
