import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-problem',
  standalone: true,
  imports: [],
  template: `
    <h3>Counter value {{ counter() }}</h3>
    <h3>Derived counter: {{ derivedCounter() }}</h3>
    <button (click)="increment()">Increment</button>
    <button (click)="multiplier = 10">Set multiplier to 10</button>
  `,
  styleUrl: './computed-problem.component.css',
})
export class ComputedProblemComponent {
  counter = signal(0);
  multiplier: number = 0;
  derivedCounter = computed(() => {
    if (this.multiplier < 10) {
      return 0;
    } else {
      return this.counter() * this.multiplier;
    }
  });
  increment() {
    console.log(`Updating counter...`);

    this.counter.set(this.counter() + 1);
  }
}


