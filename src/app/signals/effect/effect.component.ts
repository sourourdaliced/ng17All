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
  private injector = inject(Injector);

  increment() {
    this.counter.update( counter => counter+1);
  }
  private logEffect = effect(() => {
    console.log(`The current count is: ${this.counter()}`);
  });
  private logEffectWithInjector = effect(() => {
    console.log(`The current count is: ${this.counter()}`);
  }, { injector: this.injector });
}
