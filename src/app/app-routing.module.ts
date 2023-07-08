import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { SigninupGuard } from './guards/signinup.guard';

const routes: Routes = [
	{path:"", children: [
		{path:"", pathMatch:"full", component:HomepageComponent, canActivate:[AuthenticationGuard]},
		{path:"login",component:LoginComponent, canActivate:[SigninupGuard]},
		{path:"registration",component:RegistrationComponent, canActivate:[SigninupGuard]},
		{path:"add",component:AddAppointmentComponent, canActivate:[AuthenticationGuard]}
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
