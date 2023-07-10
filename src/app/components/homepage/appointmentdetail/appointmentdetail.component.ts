import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { Doctor, NODOCTOR } from 'src/app/models/Doctor';
import { NOUSER } from 'src/app/models/User';

@Component({
  selector: 'app-appointmentdetail',
  templateUrl: './appointmentdetail.component.html',
  styleUrls: ['./appointmentdetail.component.css']
})
export class AppointmentdetailComponent {
	@Input()
	appointment:Appointment={appointmentdate:new Date(), doctor:"", user:""}
}
