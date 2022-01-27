import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private authService: AuthService,
		private router: Router) {

	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(childRoute, state);
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.authService.isAutenticated()
			.then(isAuth => {
				if (isAuth) {
					return true;
				} else {
					this.router.navigate(['/'], {
						queryParams: {
							auth: false,
						}
					});
					return false;
				}
			})
	}
}