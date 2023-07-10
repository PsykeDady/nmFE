import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CallApiService } from './services/callapi.service';
import { SigninupGuard } from './guards/signinup.guard';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { LformComponent } from './components/login/lform/lform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './components/registration/rform/rform.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { CORSInterceptor } from './interceptors/cors.interceptor';
import { AppointmentdetailComponent } from './components/homepage/appointmentdetail/appointmentdetail.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegistrationComponent,
		HomepageComponent,
		AddAppointmentComponent,
		LformComponent,
  RformComponent,
  AlertComponent,
  AppointmentdetailComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		AuthenticationService,
		CallApiService,
		
		AuthenticationGuard,
		SigninupGuard,

		{
			provide:HTTP_INTERCEPTORS,
			useClass:AuthenticationInterceptor,
			multi:true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
