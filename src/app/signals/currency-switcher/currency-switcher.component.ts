import { Component, inject } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-currency-switcher',
  standalone: true,
  imports: [],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css',
})
export class CurrencySwitcherComponent {
  public currencyService = inject(SignalService);

  onChangeCurrency(newCurrency: string): void {
    this.currencyService.updateSelectedCurrency(newCurrency);
  }
}
