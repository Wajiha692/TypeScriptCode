class Car2{
    color = "Silver";

    //this is a method of power which is having a parameter
    //that car is on or off which means (true / false) (state is a parameter)

    power(state: boolean){
        if(state === true){
            console.log("Starting the engine.");
    
        }else {
            console.log( "Shutting down engine.");
        }
    }
}

//we will declare a variable that store a object that will create by using above class
//mycar is an object
let myCar = new Car2();
myCar.power(true);
console.log(myCar);
