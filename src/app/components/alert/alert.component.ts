import { Component, Input, Output } from '@angular/core';
import { AlertModel } from 'src/app/models/AlertModel';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

	@Input()
	atype:"DANGER"|"WARNING"|"SUCCESS"="DANGER"

	@Input()
	message:string=""

	@Input()
	alertmodel:AlertModel = {error:false,message:""}

	classColor():string{
		let  what:string="bg-"
		switch(this.atype){
			case "SUCCESS": what=what+"success text-white"; break; 
			case "WARNING": what=what+"warning"; break; 
			default : what = what+"danger";  
		}
		return what;  
	}

	onClose(){
		this.alertmodel.error=false
	}
}
