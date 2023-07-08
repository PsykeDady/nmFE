import { DoctorType } from "./DoctorType";
import { UserType } from "./UserType";

export class UserForm {
	name:string=""
	email:string=""
	pskH:string=""
	user:UserType="USER";
	doctorType:DoctorType="NONE";
}