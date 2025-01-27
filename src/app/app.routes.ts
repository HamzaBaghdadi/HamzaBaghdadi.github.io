import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main/main.component').then((c) => c.MainComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./sub-components/about-me/about-me.component').then(
            (c) => c.AboutMeComponent
          ),
      },
      {
        path: 'releases',
        loadComponent: () =>
          import('./sub-components/releases/releases.component').then(
            (c) => c.ReleasesComponent
          ),
      },
    ],
  },
];
