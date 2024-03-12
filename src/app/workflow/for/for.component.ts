import { NgClass, NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  players: { id: number, name: string }[] = [];
  constructor() {
    setTimeout(() => {
      this.players = [{ name: "sellaouti", id: 1 }, { name: "zidane", id:2 }, { name: "messi", id: 3 }];
    }, 1500);
  }
  episodes = [
    { id: 1, title: 'Episode 1' },
    { id: 2, title: 'Episode 2' },
    { id: 3, title: 'Episode 3' },
    { id: 4, title: 'Episode 4' },
  ];
}
