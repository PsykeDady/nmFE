import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { NOUSER, UserForm } from 'src/app/models/UserForm';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CallApiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
	userForm:UserForm=NOUSER
	appointments:Appointment[]=[]

	constructor(
		private authenticationService:AuthenticationService,
		private callApiService: CallApiService,
		private router:Router
	){
		this.userForm=authenticationService.userInfo()
		this.callApiService.myAppointment().subscribe({
			next:(v:Appointment[])=>{
				this.appointments=v.map(e=>{return {user:e.user, doctor:e.doctor, appointmentdate: new Date(Date.parse(""+e.appointmentdate))}})
			}
		})
	}

	logout(){
		this.authenticationService.logout()
		this.router.navigate(["/login"])
	}

	onAddClick() {
		this.router.navigate(["/add"])
	}
	nextAppointments():Appointment[]{
		let listafiltered=this.appointments.filter(v=>v.appointmentdate.getTime()>(new Date()).getTime())
		let listasorted= listafiltered.sort((d1,d2)=>d1.appointmentdate.getDate()-d2.appointmentdate.getDate())
		return listasorted
	}
}
