import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-is-even',
  standalone: true,
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent {
  // @Input({ required: true })
  // // set counterr(val: number) {
  // //   this.isEvenn = !(val % 2);
  // // }
  // isEvenn!: boolean;
  counter = input.required({
    alias: 'counter',
    transform: (value: number) => value * 100,
  });
  isEven = computed(() => !(this.counter() % 2));
}
