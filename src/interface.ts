//E 1 - Create a set of interfaces to describe a vehicle, passengers, location, and destination.
// Declare properties using type annotations.

interface ATrip  {
  vehicle : string;
  passengers : Number;
  location :string;
  destination:(string | number);
}

interface OppTrip extends ATrip{
   food : boolean;
}

let tripOne: ATrip = {
  vehicle: "Car",
  passengers : 30,
  location : "AMD",
  destination: "Goa",
};

let tripTwo:OppTrip = {
  vehicle:"Bus",
  passengers : 60,
  location: "Junagadh",
  destination : "Somnath",
  food:true,
};

//E 2 - create person name class with have two property ( 1. name , 2. age ) then get name and age of person

class Person{
  name:string;
  age : number;

  constructor(name:string, age : number){
      this.name = name;
      this.age = age;
  }
  getPersonName():string{
    return this.name;
  }
  getPersonAge():number{
    return this.age;
  }
}
let p1 = new Person("Darshana", 28);
let p2 = new Person("Darshu", 25);
console.log(p1.name);
console.log(p1.age);
console.log(p1.getPersonName());
console.log(p1.getPersonAge());



//E-3 - implement person interface with name , age and getSalary(function) property in Employee class

interface Person1 {
  pname : string;
  page : number;
  getSalary: (salary:number) => number;
}
class Emp implements Person1{
  pname:string;
page : number;

constructor(pname:string, page:number){
    this.pname = pname;
    this.page = page;
}
getSalary (salary:number) :number{
    return 2000;
}
}

let p3 = new Emp("Darshana", 28);
console.log(p3.pname);
console.log(p3.page);
console.log(p3.getSalary(893));





