import { Injectable } from "@angular/core";
import { NOUSER, User } from "../models/User";

@Injectable()
export class AuthenticationService {

	private _userLogged:User=NOUSER;
	private _psk:string="";

	constructor() {}

	credential():string{
		return btoa(`${this._userLogged.email}:${this._psk}`); 
	}

	logout() {
		this._userLogged=NOUSER
		this._psk=""
	}

	setup(username:string,password:string):void {
		this._userLogged=new User("", username);
		this._psk=password
	}

	login(user:User):void{
		this._userLogged=user;
	}

	isLogged():boolean{
		return this._userLogged!==NOUSER;
	}

}	