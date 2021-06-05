class person{
	constructor(name){
		this.name = name;
	}
	getDetails(){
		return `Name: ${this.name}.`
	}
}

class student extends person{
	constructor(name, id){
		super(name);
		this.id=id;
	}
	getDetails(){
		return `Name: ${this.name}\nID: ${this.id}\nSuper: ${super.getDetails()}`
		// ${super.getDetails()} prints all the methods associated with parent class
	}
}

let s1 = new student("Rohan Nanda", 121);
console.log(s1.getDetails());