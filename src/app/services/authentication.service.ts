import { Injectable } from "@angular/core";
import { UserForm,NOUSER } from "../models/UserForm";

@Injectable()
export class AuthenticationService {

	private _userLogged:UserForm=NOUSER;

	constructor() {}

	credential():string{
		return btoa(`${this._userLogged.email}:${this._userLogged.pskH}`); 
	}

	logout() {
		this._userLogged=NOUSER
	}

	setup(username:string,password:string):void {
		this._userLogged.email=username; 
		this._userLogged.pskH=password;
	}

	login(user:UserForm):void{
		this._userLogged=user;
	}

	isLogged():boolean{
		return this._userLogged!==NOUSER;
	}

}	