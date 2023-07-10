import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModel } from 'src/app/models/AlertModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	alert:AlertModel={error: false, message:""}; 
	constructor(private router:Router){
	}

	goToRegistration() {
		this.router.navigate(["/registration"])
	}

}
