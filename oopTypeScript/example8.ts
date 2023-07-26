//overriden methods
class Car8{
   
    constructor(color: string, location: string, vin: string | number){
  
        this.color = color
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;

    owner!: string; 
    readonly vin: string | number;

    power(state: boolean): string{
        if(state === true){
            console.log("Starting the engine.");

            return "Starting the engine."
    
        }else {
            console.log( "Shutting down engine.");

            return "Shutting down engine."
        }
    }
}

//overridden constructor

class Mercedes extends Car8 {

//overriden property
//we are changing the vin from string to number
    constructor(color: string, location: string, vin: number, alloyWheels: boolean){
  
    super(color, location, vin)
    this.alloyWheels = alloyWheels

}
    alloyWheels: boolean;
    adjustableSuspension = true;

    //overriden the methods
    power(state: boolean): string{
        if(state === true){
            console.log("Starting the Mercedes engine.");
            
            return("Starting the Mercedes engine.");
    
        }else {
            console.log("Shutting down Mercedes engine.");
            
            return( "Shutting down Mercedes engine.");
        }
    }

}
 
let myCar = new Mercedes("Silver", "California", 22, true);
let car = new Car8("Corolla", "Islamabad", "2 d") 
console.log(myCar);
  myCar.power(true);


 

 export{}