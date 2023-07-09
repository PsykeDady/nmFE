import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallApiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-lform',
  templateUrl: './lform.component.html',
  styleUrls: ['./lform.component.css']
})
export class LformComponent {

	constructor(
		private callApiService:CallApiService,
		private router:Router
	){}

	loginForm:FormGroup = new FormGroup({
		"email":new FormControl("", [Validators.email, Validators.required]),
		"psk": new FormControl("", [Validators.required])
	})


	login(){
		let email:string = this.loginForm.controls["email"].value
		let psk:string = this.loginForm.controls["psk"].value
		this.callApiService.login(email,psk);
		this.router.navigate(["/"])
	}

	getInvalidStatus() {
		for (let i in this.loginForm){
			if(this.loginForm.invalid){
				return true; 
			}
		}
		return false;
	}
}
