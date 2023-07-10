import { Injectable } from "@angular/core";
import { UserForm,NOUSER } from "../models/UserForm";

@Injectable()
export class AuthenticationService {

	private _userLogged:UserForm=NOUSER;

	constructor() {
		let userLogged:string=""+localStorage.getItem("userLogged");
		if(userLogged&&userLogged!==""&&userLogged!=="null"){
			try {
				console.log(userLogged)
				this._userLogged=JSON.parse(userLogged)
			} 
			catch(e){
				console.error(e)
				this.logout()
			}
		}
	}

	credential():string{
		return btoa(`${this._userLogged.email}:${this._userLogged.pskH}`); 
	}

	logout() {
		this._userLogged=NOUSER
		localStorage.removeItem("userLogged")
	}

	setup(username:string,password:string):void {
		this._userLogged=new UserForm("",username,password,"USER","NONE")
	}

	login(user:UserForm):void{
		this._userLogged=new UserForm(user.name,user.email,this._userLogged.pskH,user.user,user.doctorType);
		console.log(this._userLogged)
		localStorage.setItem("userLogged",JSON.stringify(this._userLogged));
	}

	isLogged():boolean{
		return this._userLogged!==NOUSER;
	}

	userInfo():UserForm{
		return new UserForm(this._userLogged.name,this._userLogged.email,"",this._userLogged.user,this._userLogged.doctorType)
	}

}	