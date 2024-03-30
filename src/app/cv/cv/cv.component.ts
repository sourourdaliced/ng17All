import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ListComponent } from "../list/list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { Observable, catchError, finalize, map, of, share, shareReplay, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  standalone: true,
  styleUrls: ['./cv.component.css'],
  imports: [
    DatePipe,
    UpperCasePipe,
    ListComponent,
    CvCardComponent,
    EmbaucheComponent,
    AsyncPipe
  ],
})
export class CvComponent {
  cvs$!: Observable<Cv[]>;
  junios$!: Observable<Cv[]>;
  seniors$!: Observable<Cv[]>;
  date = new Date();
  constructor(private cvService: CvService, private toastr: ToastrService) {}
  ngOnInit() {
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((e) => {
        /* return EMPTY; */
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      }),
      share()
    );
    this.junios$ = this.cvs$.pipe(
      tap(() => console.log('Start Junior')),
      map((cvs) => cvs.filter((cv) => cv.age < 40)),
      finalize(() => console.log('complete Junior')
      )
    );
    this.seniors$ = this.cvs$.pipe(
      tap(() => console.log('Start Seniors')),
      map((cvs) => cvs.filter((cv) => cv.age >= 40)),
      finalize(() => console.log('complete Senior'))
    );
  }
}
