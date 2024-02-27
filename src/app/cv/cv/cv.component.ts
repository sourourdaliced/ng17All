import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ListComponent } from "../list/list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { EmbaucheComponent } from "../embauche/embauche.component";
@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    standalone: true,
    styleUrls: ['./cv.component.css'],
    imports: [DatePipe, UpperCasePipe, ListComponent, CvCardComponent, EmbaucheComponent]
})
export class CvComponent {
  cvs: Cv[] = [];
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
}
