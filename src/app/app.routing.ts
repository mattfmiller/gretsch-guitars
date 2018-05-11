import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';
import { FilteredGuitarListComponent } from './filtered-guitar-list/filtered-guitar-list.component';
import { GuitarListHollowComponent } from './guitar-list-hollow/guitar-list-hollow.component';

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
    path: 'filteredGuitarList/:category',
    component: FilteredGuitarListComponent
  },
  {
    path: 'guitars/:id',
    component: GuitarDetailComponent
  },
  {
    path: 'guitarList/hollowbody',
    component: GuitarListHollowComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
