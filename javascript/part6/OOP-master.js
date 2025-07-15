let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,

    start : function () {
        return `${this.make} car got started in ${this.year}`;
    },
};
//console.log(car.start());
//------------------------------------------------------
class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}
let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

//------------------------------------------------------------------


//Encapsulation
class  BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
// console.log(account.getBalance());
//-----------------------------------------
//Abstraction
class CoffeMachine{
    start(){
        //call DB
        //filter value
        return `Starting the machine......`
    }
    brewCoffee(){
        //complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
        this.start()
        this.brewCoffee()
    }
}
let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());