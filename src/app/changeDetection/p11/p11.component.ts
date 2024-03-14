import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignalService } from '../../signals/signal.service';

@Component({
  selector: 'app-p11',
  standalone: true,
  imports: [],
  templateUrl: './p11.component.html',
  styleUrl: './p11.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class P11Component {
  aFakeFunction() {
    console.log('aFakeFunction in app-p11');
    return 'aFakeFunction in app-p11';
  }
  doSomething() {}

  signalService: SignalService = inject(SignalService);
  f() {}
}
