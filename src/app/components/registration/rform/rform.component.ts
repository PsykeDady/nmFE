import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DoctorType, DoctorTypes } from 'src/app/models/DoctorType';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
	isDoctor:boolean=false; 
	seepsk:boolean=false;

	constructor(private authenticationService:AuthenticationService){}

	registrationForm:FormGroup = new FormGroup({
		"email":new FormControl("", [Validators.email, Validators.required]),
		"psk": new FormControl("", [Validators.required]),
		"visiblepsk" : new FormControl({value:"",disabled:true}),
		"isdoctorCheck": new FormControl(false),
		"selectType":new FormControl("Select a Doctor Type")
	})


	register(){
		
	}

	doctorType():string[]{
		return DoctorTypes.filter((_,i)=>i>0);
	}

	flagIsDoctor(event:Event):void{
		this.isDoctor=(event.target as HTMLInputElement).checked
	}
	pskChange(){
		console.log(this.seepsk)
		this.registrationForm.controls["visiblepsk"].setValue(this.seepsk?this.registrationForm.controls["psk"].getRawValue():"")
	}
	flagSeepsk(){
		this.seepsk=!this.seepsk
		this.pskChange()
	}
}
