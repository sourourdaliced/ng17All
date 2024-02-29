import { JsonPipe } from '@angular/common';
import { Component, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signa-object',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div (click)="updateObject()" class="alert alert-primary">
      {{ title()}}
    </div>
  `,
  styleUrl: './signa-object.component.css',
})
export class SignaObjectComponent {
  object = signal({
    id: 1,
    title: 'Angular For Beginners',
  });

  title = computed(() => {
    console.log(`Calling computed() function...`);

    const course = this.object();

    return course.title;
  });

  updateObject() {

    // We are setting the signal with the exact same
    // object to see if the derived title signal will
    // be recalculated or not
    this.object.set({
      id: 1,
      title: 'Angular For Beginners',
    });
  }
}
