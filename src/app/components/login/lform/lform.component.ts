import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lform',
  templateUrl: './lform.component.html',
  styleUrls: ['./lform.component.css']
})
export class LformComponent {

	loginForm:FormGroup = new FormGroup({
		"email":new FormControl("", Validators.required),
		"psk": new FormControl("", Validators.email)
	})


	login(){
		
	}
}
