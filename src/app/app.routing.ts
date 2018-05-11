import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GuitarFilterListComponent } from './guitar-filter-list/guitar-filter-list.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
// import { SocialLinkListComponent } from './social-link-list/social-link-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: GuitarFilterListComponent,
  //   outlet: 'guitarFilterList'
  // },
  // {
  //   path: '',
  //   component: SocialLinkListComponent,
  //   outlet: 'socialLinkList'
  // },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'guitars',
    component: GuitarListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
