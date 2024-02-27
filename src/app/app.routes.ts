import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CvComponent } from './cv/cv/cv.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { DetailsResolver } from './cv/resolvers/details.resolver';
import { ListResolver } from './cv/resolvers/list.resolver';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
 { path: '', component: HomeComponent},
 // Lazyload component
 {
  path: 'login',
  loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
 },
  //  Lazyload sub-routes
 {
  path: 'cv',
  loadChildren: () => import('./cv/cv.routing').then(m => m.CV_ROUTES)
 }
];
