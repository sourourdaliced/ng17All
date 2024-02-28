import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IsEvenComponent } from "./components/is-even/is-even.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      NavbarComponent,
      FormsModule,
      RouterOutlet,
      IsEvenComponent]
})
export class AppComponent {
  counter = 0;
}
