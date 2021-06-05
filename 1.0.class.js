class vehicle{
	constructor(company, carType){
		this.company = company;
		this.carType = carType;
	}

	getDetails(){
		return `${this.carType} car of company ${this.company}`;
		// return this.carType + " car of company " + this.company;
	}
}

let v1 = new vehicle("BMW", "Sedan");
let v2 = new vehicle("Range Rover", "SUV");

console.log(v2.getDetails());
console.log(v1.getDetails());