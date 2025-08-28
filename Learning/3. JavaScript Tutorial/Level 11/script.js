const student = {
    fullName : "krishnakant Sharma",
    marks : 91.0,
    printMarks: function(){
        console.log("marks =", marks);
    }
};

const employee = {
    // to declare funcation method 1 
    calTax1(){
        console.log("The Tax Rate Is 10%.");
    },
    // to declare funcation method 2 
//     calTax2: function(){
//         console.log("The Tax Rate Is 10% ");
//     }
}

const RamShyam = {
    salary: 50000,
};
const RamShyam1 = {
    salary: 54000,
};
const RamShyam2 = {
    salary: 60000,
};
const RamShyam3 = {
    salary: 30000,
};
const RamShyam4 = {
    salary: 40000,
};
const RamShyam5 = {
    salary: 50000,
};
const RamShyam6 = {
    salary: 69000,
};


RamShyam.__proto__=employee;
RamShyam1.__proto__=employee;
RamShyam2.__proto__=employee;
RamShyam3.__proto__=employee;
RamShyam4.__proto__=employee;
RamShyam5.__proto__=employee;
RamShyam6.__proto__=employee;


// Class In JS

class ToyotaCar{
    constructor(brand, milage){
        console.log("Creating new object");
        this.brand=brand;
        this.milage=milage;

    }
    start(){
        console.log("This is Start of Function.");
    }
    stop(){
        console.log("This is Stop of Function.")
    }

}
 let fortuner = new ToyotaCar("fortuner", 12);
console.log(fortuner);
let lexus = new ToyotaCar("Lexus", 15);
console.log(lexus);


// Inheritance in JS

class Parent{
    hello(){
            console.log("Hello hello Cutie fattie techiees i am learning inheritance in js. ");
    }
}

class child extends Parent{ }
let obj = new child();

// example 

class Person {
    constructor() {
        this.species = "Homo Sapiens";
    }

    eat() {
        console.log("This Person has eaten food.");
    }

    sleep() {
        console.log("This Person is sleeping.");
    }

    walk() {
        console.log("This Person is walking.");
    }

    work() {
        console.log("This Person is working.");
    }
}

class Engineer extends Person {
    work() {
        console.log("This Engineer is solving problems and building things.");
    }
}

class Doctor extends Person {
    work() {
        console.log("This Doctor is saving lives.");
    }
}

let krishnakantObj = new Engineer();