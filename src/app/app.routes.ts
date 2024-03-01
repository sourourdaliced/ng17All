import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Lazyload component
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  //  Lazyload sub-routes
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.routing').then((m) => m.CV_ROUTES),
  }, //  Lazyload sub-routes
  {
    path: 'signal',
    loadChildren: () =>
      import('./signals/signals.routes').then((m) => m.SIGNAL_ROUTES),
  },
  {
    path: 'flow',
    loadChildren: () =>
      import('./workflow/flow.routes').then((m) => m.FLOW_ROUTES),
  },
];
