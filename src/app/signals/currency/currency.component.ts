import { Component, inject } from '@angular/core';
import { CurrencySwitcherComponent } from '../currency-switcher/currency-switcher.component';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CurrencySwitcherComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  private currencyService = inject(SignalService);
  selectedCurrency = this.currencyService.selectedCurrency;
}
