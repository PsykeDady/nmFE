import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-lform',
  templateUrl: './lform.component.html',
  styleUrls: ['./lform.component.css']
})
export class LformComponent {

	constructor(private authenticationService:AuthenticationService){}

	loginForm:FormGroup = new FormGroup({
		"email":new FormControl("", [Validators.email, Validators.required]),
		"psk": new FormControl("", [Validators.required])
	})


	login(){
		
	}
}
