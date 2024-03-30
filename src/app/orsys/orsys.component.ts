import { Component, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-orsys',
  standalone: true,
  imports: [],
  templateUrl: './orsys.component.html',
  styleUrl: './orsys.component.css',
})
export class OrsysComponent {
  x = signal(5);
  y = signal(4);
  z = computed(() => this.x() + this.y());
  increment(element: WritableSignal<number>) {
    element.update((old) => old +1);
  }
}
