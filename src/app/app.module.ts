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


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegistrationComponent,
		HomepageComponent,
		AddAppointmentComponent,
		LformComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [
		AuthenticationService,
		CallApiService,
		
		AuthenticationGuard,
		SigninupGuard,

		AuthenticationInterceptor
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
