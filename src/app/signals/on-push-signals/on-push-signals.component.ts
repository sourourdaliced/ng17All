import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-on-push-signals',
  standalone: true,
  imports: [],
  template: `
    <h1>{{counter()}}</h1>
  `,
  styleUrl: './on-push-signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushSignalsComponent {
  counter = signal(0);
  logEffect = effect(() => {
    console.log(this.counter());

  });
  constructor() {
    setInterval(() => {
      this.counter.update(val => val + 1);
    },1000);
  }
}
