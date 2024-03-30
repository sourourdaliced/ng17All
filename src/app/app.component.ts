import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IsEvenComponent } from "./signals/is-even/is-even.component";
import { FormsModule } from '@angular/forms';
import { SignalApiComponent } from "./signals/signal-api/signal-api.component";
import { SignalService } from './signals/signal.service';
import { OrsysComponent } from "./orsys/orsys.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-navbar />
    <app-orsys/>
    <!-- <div (click)="duplicateValue()" class="alert alert-primary">
      {{ value }}
    </div> -->
    <router-outlet />
  `,
    styleUrl: './app.component.css',
    imports: [NavbarComponent, RouterOutlet, OrsysComponent]
})
export class AppComponent {
  private _value = 'init value ';
  signalService = inject(SignalService);
  get value() {
    console.log('computing value');
    return this._value;
  }
  duplicateValue() {
    this.signalService.increment();
    this._value += this._value;
  }
}
