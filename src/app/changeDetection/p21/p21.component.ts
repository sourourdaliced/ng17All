import { Component } from '@angular/core';

@Component({
  selector: 'app-p21',
  standalone: true,
  imports: [],
  templateUrl: './p21.component.html',
  styleUrl: './p21.component.css',
})
export class P21Component {
  aFakeFunction() {
    console.log('aFakeFunction in app-p21');
    return 'aFakeFunction in app-p21';
  }
  f() {}
}
