import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarFilterListComponent } from './guitar-filter-list/guitar-filter-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GuitarFilterListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
