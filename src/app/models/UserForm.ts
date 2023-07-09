import { DoctorType } from "./DoctorType";
import { UserType } from "./UserType";


export class UserForm {
	constructor(
		public name:string,
		public email:string,
		public pskH:string,
		public user:UserType,
		public doctorType:DoctorType
	){}
}

export const NOUSER:UserForm= new UserForm("","","","USER","NONE"); 