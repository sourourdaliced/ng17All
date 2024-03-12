import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth.service';
import { APP_ROUTES } from '../../config/routes.config';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  standalone: true,
  imports: [DefaultImagePipe],
  styleUrls: ['./details-cv.component.css'],

})
export class DetailsCvComponent implements OnInit {
  // Coming from Resolver
  @Input('cv') cv: Cv | null = null;
  // @Input('id')  id!: number;
  constructor(
    private cvService: CvService,
    private router: Router,
    // private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.cvService.getCvById(params['id']).subscribe({
    //     next: (cv) => {
    //       this.cv = cv;
    //     },
    //     error: (e) => {
    //       this.router.navigate([APP_ROUTES.cv]);
    //     },
    //   });
    // });
  }
  deleteCv(cv: Cv) {
    this.cvService.deleteCvById(cv.id).subscribe({
      next: () => {
        this.toastr.success(`${cv.name} supprimé avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: () => {
        this.toastr.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }
}
