import { Component, computed, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signal-api',
  standalone: true,
  imports: [],
  styleUrl: './signal-api.component.css',
  template: `
    <h1>Hello {{ fullname() }}</h1>
    <input type="number" #input (change)="setCounter(+input.value)" />
    <h2 (click)="increment()">
      You can click over me :D You clicked {{ counter() }} times
    </h2>
    <button class="btn btn-danger" (click)="lastname.set('newSellaouti')">
      Change Lastname
    </button>
    <button class="btn btn-success" (click)="firstname.set('skander')">
      Change Firstname
    </button>
  `,
})
export class SignalApiComponent {
  lastname = signal('sellaouti');
  firstname = signal('aymen');
  fullname = computed(() => `${this.firstname()} ${untracked(this.lastname)}`);
  counter = signal(0);
  multiple = 0;
  multipliedCounter = computed(() => {
    if (this.multiple == 0) {
      return 0
    } else {
      return this.counter() * this.multiple;
    }
  });

  increment() {
    this.counter.update((currentValue) => currentValue + 1);
  }
  setCounter(val: number) {
    this.counter.set(val);
  }
}
