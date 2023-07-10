import { DoctorType } from "./DoctorType"

export class Doctor {
	email:String=""
	specialty:DoctorType="NONE";
}

export const NODOCTOR:Doctor = new Doctor()