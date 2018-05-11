import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'guitar-list/:category',
    component: GuitarListComponent
  },
  {
    path: 'guitars/:id',
    component: GuitarDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
