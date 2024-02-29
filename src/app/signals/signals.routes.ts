import { ComputedProblemComponent } from "./computed-problem/computed-problem.component";
import { CurrencyComponent } from "./currency/currency.component";
import { EffectComponent } from "./effect/effect.component";
import { InputSignalComponent } from "./input-signal/input-signal.component";
import { SignaObjectComponent } from "./signa-object/signa-object.component";
import { SignalApiComponent } from "./signal-api/signal-api.component";

export const SIGNAL_ROUTES = [
  {
    path: 'api',
    component: SignalApiComponent,
  },
  {
    path: 'computedProblem',
    component: ComputedProblemComponent,
  },
  { path: 'object', component: SignaObjectComponent },
  { path: 'input', component: InputSignalComponent },
  { path: 'effect', component: EffectComponent },
  { path: 'currency', component: CurrencyComponent },
];
