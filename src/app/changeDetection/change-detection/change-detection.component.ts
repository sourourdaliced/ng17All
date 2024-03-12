import { Component } from '@angular/core';
import { P1Component } from "../p1/p1.component";
import { P2Component } from "../p2/p2.component";

@Component({
    selector: 'app-change-detection',
    standalone: true,
    templateUrl: './change-detection.component.html',
    styleUrl: './change-detection.component.css',
    imports: [P1Component, P2Component]
})
export class ChangeDetectionComponent {

}
