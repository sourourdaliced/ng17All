import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private currencies = signal(['USD', 'EUR', 'GBP']);
  currencies$ = this.currencies.asReadonly();
  private selectedCurrency$ = signal(this.currencies()[0]);
  public selectedCurrency = this.selectedCurrency$.asReadonly();
  updateSelectedCurrency(currencie: string) {
    this.selectedCurrency$.set(currencie);
  }
  constructor() { }
}
