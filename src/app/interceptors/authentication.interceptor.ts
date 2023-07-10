import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { API_BASE, API_LOGIN, API_REGISTRATION } from '../constants/api.constants';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

	constructor(private authenticationService:AuthenticationService){

	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		if(this.authenticationService.isLogged()) {
			const credential= this.authenticationService.credential();
			if(req.url.startsWith(API_BASE)){
				if(![API_REGISTRATION].includes(req.url)){
					req=req.clone({
						headers:req.headers.append("Authorization", `BASIC ${credential}`)
					})
				}
			}
		}
		
		return next.handle(req);
	}
}