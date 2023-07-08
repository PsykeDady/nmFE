export class User{
	constructor(
		public nome:String,
		public email: String,
	){
	}
}

	
export const NOUSER:User=new User("","");