import { Component, inject, signal } from '@angular/core';
import { interval, tap, map, take, shareReplay } from 'rxjs';
import { CvService } from '../../cv/services/cv.service';

@Component({
  selector: 'app-share-replay',
  standalone: true,
  imports: [],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css'
})
export class ShareReplayComponent {
    cvService = inject(CvService);
    constructor() {
      const cvs$ = this.cvService.getCvs().pipe(
        shareReplay()
      );
      const sharedSource$ = interval(1000).pipe(
        tap((ind) => console.log('Processing: ', ind)),
        map(() => Math.round(Math.random() * 100)),
        take(2),
        shareReplay()
      );
      sharedSource$.subscribe((x) => console.log('subscription 1: ', x));
      sharedSource$.subscribe((x) => console.log('subscription 2: ', x));
      cvs$.subscribe((cvs) => {
        console.log('cvs subscription 1: ');
        console.log(cvs);
      });
      setTimeout(
        () => {
          sharedSource$.subscribe((x) => console.log('subscription 3: ', x)),
            cvs$.subscribe((cvs) => {
              console.log('cvs subscription 2: ');
              console.log(cvs);
            });
        },
        4500
      );
    }

}
