import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  currencies = signal(['USD', 'EUR', 'GBP']);
  selectedCurrency = signal('??');
  updateSelectedCurrency(currencie: string) {
    this.selectedCurrency.set(currencie);
  }
  constructor() { }
}
