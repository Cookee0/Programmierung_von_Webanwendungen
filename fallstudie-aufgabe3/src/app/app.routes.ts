import {Routes} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/main-page/main-page');
      return m.MainPage;
    }
  },

  {
    path: 'companies',
    loadComponent: async () => {
      const m = await import('./pages/footprints-companies-page/footprints-companies-page');
      return m.FootprintsCompaniesPage;
    },
    providers: [provideHttpClient()]
  },

/*  {
    path: 'impressum',
    loadComponent:  async() =>{
      const m = await import('./pages/impressum/impressum');
      return m.ImpressumPage;
    }
  },

  {
    path: 'datenschutz',
    loadComponent:  async() =>{
      const m = await import('./pages/datenschutz/datenschutz');
      return m.datenschutzPage;
    }
  },

  {
    path: 'agb',
    loadComponent:  async() =>{
      const m = await import('./pages/agb/agb');
      return m.agbPage;
    }
  },*/

];
