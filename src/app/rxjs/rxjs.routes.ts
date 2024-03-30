import { ShareReplayComponent } from "./share-replay/share-replay.component";
import { ShareComponent } from "./share/share.component";

export const RXJS_ROUTES = [
  {
    path: 'share',
    component: ShareComponent,
  },
  {
    path: 'shareReplay',
    component: ShareReplayComponent,
  },
];
