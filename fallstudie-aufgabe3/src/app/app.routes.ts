import {Routes} from '@angular/router';

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
  },

  {
    path: 'impressum',
    loadComponent: async () => {
      const m = await import('./pages/impressum-page/impressum-page');
      return m.ImpressumPage;
    }
  },

  {
    path: 'quellenhinweis',
    loadComponent: async () => {
      const m = await import('./pages/quellenhinweis-page/quellenhinweis-page');
      return m.QuellenhinweisPage;
    }
  },


];
