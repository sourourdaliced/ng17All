import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe],
  template: `<h1>{{ count$ | async }}</h1>`,
  styleUrl: './rxjs-interop.component.css',
})
export class RxjsInteropComponent {
  count = signal(0);

  count$ = toObservable(this.count);
  constructor() {
    this.count$.subscribe((data) => console.log(data));
    this.count.set(1);
    this.count.set(2);
    // setInterval(() => this.count.update((count) => count + 1), 1000);
  }
}
