import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { API_DOCTOR_LIST, API_DOCTOR_SEARCH, API_LOGIN, API_REGISTRATION, API_USER_MYAPPOINTMENTS, API_USER_NEWAPPOINTMENT } from "../constants/api.constants";
import { AuthenticationService } from "./authentication.service";
import { UserForm } from "src/app/models/UserForm"
import { User } from '../models/User';
import { AppointmentForm } from '../models/AppointmentForm';
import { Appointment } from '../models/Appointment';
import { Doctor } from '../models/Doctor';
import { DoctorType } from '../models/DoctorType';

@Injectable()
export class CallApiService {

	constructor(
		private authenticationService:AuthenticationService,
		private httpClient: HttpClient
	){}

	login(email:string,password:string): Observable<any> {
		this.authenticationService.setup(email,password)
		let credentials:String = this.authenticationService.credential();
		return this.httpClient.get<User>(API_LOGIN)
			.pipe(tap(user=> {this.authenticationService.login(user)}))
	}

	logout(): void{
		this.authenticationService.logout()
	}

	registration(uf:UserForm): Observable<User> {
		return this.httpClient.post<User>(API_REGISTRATION,uf);
	}

	newAppointment(appointment: AppointmentForm): Observable<number> {
		return this.httpClient.post<number>(API_USER_NEWAPPOINTMENT,appointment);
	}

	myAppointment(): Observable<any> {
		let credentials:String = this.authenticationService.credential();
		return this.httpClient.get<Appointment[]>(API_USER_MYAPPOINTMENTS)
	}

	listDoctors(): Observable<any> {
		return this.httpClient.get<Doctor[]>(API_DOCTOR_LIST);
	}

	searchDoctors(search:DoctorType): Observable<any> {
		return this.httpClient.get<Doctor[]>(API_DOCTOR_SEARCH+`/${search}`)
	}

}