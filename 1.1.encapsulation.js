class person{
	constructor(name,id){
		this.name = name;
		this.id = id;
	}
	addAddress(add){
		this.add = add;
	}
	getDetails(){
		return `${this.name} lives in ${this.add}.`;
	}
}

let p1 = new person("Dhairya", 7);
p1.addAddress("Jaipur");

console.log(p1.getDetails());