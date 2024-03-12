import { Routes } from "@angular/router";
import { ForComponent } from "./for/for.component";
import { IfComponent } from "./if/if.component";
import { SwitchComponent } from "./switch/switch.component";

export const FLOW_ROUTES: Routes = [
  { path: 'for', component: ForComponent },
  { path: 'if', component: IfComponent },
  { path: 'switch', component: SwitchComponent },
];
