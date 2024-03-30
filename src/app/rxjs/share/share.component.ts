import { Component, inject } from '@angular/core';
import { interval, tap, map, take, share, shareReplay } from 'rxjs';
import { CvService } from '../../cv/services/cv.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrl: './share.component.css',
  standalone: true,
})
export class ShareComponent {
  cvService = inject(CvService);
  constructor() {
    const cvs$ = this.cvService.getCvs().pipe(share());
    const sharedSource$ = interval(1000).pipe(
      tap((ind) => console.log('Processing: ', ind)),
      map(() => Math.round(Math.random() * 100)),
      take(2),
      share()
    );
    sharedSource$.subscribe((x) => console.log('subscription 1: ', x));
    sharedSource$.subscribe((x) => console.log('subscription 2: ', x));
    cvs$.subscribe((cvs) => {
      console.log('cvs subscription 1: ');
      console.log(cvs);
    });
    setTimeout(() => {
      sharedSource$.subscribe((x) => console.log('subscription 3: ', x)),
        cvs$.subscribe((cvs) => {
          console.log('cvs subscription 2: ');
          console.log(cvs);
        });
    },4500);
  }
}
