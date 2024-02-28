import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-is-even',
  standalone: true,
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css'
})
export class IsEvenComponent {
  // @Input({required: true})
  // set counter(val: number) {
  //   this.isEven = !(val % 2);
  // };
  // isEven!: boolean;
  counter = input.required<number>();
  isEven = computed(() => !(this.counter()%2))
}
