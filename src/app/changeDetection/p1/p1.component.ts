import { ChangeDetectionStrategy, Component } from '@angular/core';
import { P11Component } from "../p11/p11.component";

@Component({
  selector: 'app-p1',
  standalone: true,
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.css',
  imports: [P11Component],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class P1Component {
  aFakeFunction() {
    console.log('aFakeFunction in app-p1');
    return 'aFakeFunction in app-p1';
  }
}
