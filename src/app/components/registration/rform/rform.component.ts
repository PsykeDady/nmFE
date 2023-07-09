import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorType, DoctorTypes } from 'src/app/models/DoctorType';
import { User } from 'src/app/models/User';
import { UserForm } from 'src/app/models/UserForm';
import { UserType } from 'src/app/models/UserType';
import { CallApiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
	isDoctor:boolean=false; 
	seepsk:boolean=false;

	constructor(
		private callApiService:CallApiService,
		private router:Router
	){}

	registrationForm:FormGroup = new FormGroup({
		"uname":new FormControl("",[Validators.required]),
		"email":new FormControl("", [Validators.email, Validators.required]),
		"psk": new FormControl("", [Validators.required]),
		"visiblepsk" : new FormControl({value:"",disabled:true},[Validators.nullValidator]),
		"isdoctorCheck": new FormControl(false),
		"selectType":new FormControl("Select a Doctor Type")
	})


	register(){
		let name=this.registrationForm.controls[""].value
		let email=this.registrationForm.controls["email"].value
		let psk=this.registrationForm.controls["psk"].value
		let userType:UserType=this.isDoctor?"DOCTOR":"USER"
		let doctorType:DoctorType=this.registrationForm.controls["selectType"].value

		let uf:UserForm = new UserForm(name,email,psk,userType,doctorType); 
		this.callApiService.registration(uf)
		this.router.navigate(["/login"])
	}

	doctorType():string[]{
		return DoctorTypes.filter((_,i)=>i>0);
	}

	flagIsDoctor(event:Event):void{
		this.isDoctor=(event.target as HTMLInputElement).checked
	}
	pskChange(){
		this.registrationForm.controls["visiblepsk"].setValue(this.seepsk?this.registrationForm.controls["psk"].value:"")
	}
	flagSeepsk(){
		this.seepsk=!this.seepsk
		this.pskChange()
	}
	getInvalidStatus(){
		for (let i in this.registrationForm.controls){
			if (i!=="visiblepsk" && !this.registrationForm.controls[i].valid) {
				return true;
			}
		}
		return false 
	}
}
