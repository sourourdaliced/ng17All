import { AuthGuard } from "../auth/guards/auth.guard";
import { LoginComponent } from "../auth/login/login.component";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { MasterDetailCvComponent } from "./master-detail-cv/master-detail-cv.component";
import { DetailsResolver } from "./resolvers/details.resolver";
import { ListResolver } from "./resolvers/list.resolver";

export const CV_ROUTES = [
  {
    path: '',
    component: CvComponent,
  },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: 'list',
    component: MasterDetailCvComponent,
    resolve: {
      cvs: ListResolver,
    },
    children: [
      {
        path: ':id',
        component: DetailsCvComponent,
        resolve: { cv: DetailsResolver },
        data: {
          someData: { name: 'aymen' },
        },
      },
    ],
  },
  {
    path: ':id',
    component: DetailsCvComponent,
    resolve: { cv: DetailsResolver },
    data: {
      someData: { name: 'aymen' },
    },
  },
];
