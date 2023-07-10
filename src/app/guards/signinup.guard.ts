import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
@Injectable()
export class SigninupGuard implements CanActivate {


	constructor(
		private router:Router,
		private authenticationService:AuthenticationService
	){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if(this.authenticationService.isLogged()){
			return this.router.navigate(["/"]);
		}
		return true;
	}
	
}