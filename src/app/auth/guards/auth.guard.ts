import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { APP_ROUTES } from "../../config/routes.config";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

  export const AuthGuard = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isAuthenticated()) {
      router.navigate([APP_ROUTES.login]);
      return false;
    }
    return true;
  }

