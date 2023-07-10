import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModel } from 'src/app/models/AlertModel';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentForm } from 'src/app/models/AppointmentForm';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorType, DoctorTypes } from 'src/app/models/DoctorType';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CallApiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
	addAppointmentForm:FormGroup = new FormGroup ({
		"selectType":new FormControl("Select a Doctor Type",[Validators.required]),
		"doctors":new FormControl(null,[Validators.required]),
		"datetime":new FormControl(null, [Validators.required])
	})
	alertModel: AlertModel= {error:false, message:""}
	doctors:Doctor[]=[];


	constructor(
		private callApi:CallApiService,
		private router:Router
	){}


	doctorType():string[]{
		return DoctorTypes.filter((_,i)=>i>0);
	}

	searchDoctor(){
		let docType:DoctorType = this.addAppointmentForm.controls["selectType"].value

		if(docType!=="NONE"){
			this.callApi.searchDoctors(docType).subscribe((v:Doctor[]) => {
				this.doctors.push(...v)
			})
		}
	}

	disabledBottom(){
		for (let i in this.addAppointmentForm.controls){
			if (!this.addAppointmentForm.controls[i].valid) {
				return i==="doctors"?this.addAppointmentForm.controls[i].value!=="":true;
			}
		}
		return false 
	}

	addAppointment(){
		let doc:Doctor = new Doctor()
		doc.email=this.addAppointmentForm.controls["doctors"].value
		doc.specialty=this.addAppointmentForm.controls["selectType"].value
		let appointment:AppointmentForm = {
			d:doc,
			l:this.addAppointmentForm.controls["datetime"].value
		}
		console.log(appointment)
		this.callApi.newAppointment(appointment).subscribe({
			next: ()=>{
				this.router.navigate(["/"])
			}, 
			error: (error)=> {
				this.alertModel.error=true
				this.alertModel.message=error.message
			}
		})
	}
}
