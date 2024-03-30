import { Component, signal, effect, Injector, inject } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [],
  template: `
    <div (click)="increment()" class="alert alert-warning">
      {{ counter() }}
    </div>
  `,
  styleUrl: './effect.component.css',
})
export class EffectComponent {
  counter = signal(0);
  constructor() {
    this.counter.set(1);
    this.counter.set(2);
  }
  private logEffect = effect(() => {
    console.log(`The current count is: ${this.counter()}`);
  });

  increment() {
    this.counter.update( counter => counter+1);
  }
  // private injector = inject(Injector);
  // private logEffectWithInjector = effect(() => {
  //   console.log(`The current count is: ${this.counter()}`);
  // }, { injector: this.injector });
}
