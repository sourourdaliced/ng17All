import { Component, computed, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './signal-rxjs.component.html',
  styleUrl: './signal-rxjs.component.css',
})
export class SignalRxjsComponent {
  count = signal(0);
  count$ = toObservable(this.count);
  constructor() {
    this.count$.subscribe((data) => console.log(data));
    this.count.set(1);
    this.count.set(2);
    setInterval(() => this.count.update((count) => count + 1 ), 1000);
  }
}
