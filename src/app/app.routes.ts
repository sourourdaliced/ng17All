import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeferComponent } from './defer/defer/defer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'defer',
    loadComponent: () =>
      import('./defer/defer/defer.component').then((m) => m.DeferComponent),
  },
  // Lazyload component
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  // Lazyload component
  {
    path: 'cd',
    loadComponent: () =>
      import(
        './changeDetection/change-detection/change-detection.component'
      ).then((m) => m.ChangeDetectionComponent),
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
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./rxjs/rxjs.routes').then((m) => m.RXJS_ROUTES),
  },
];
