class Car7{
   
    constructor(color: string, location: string, vin: string){
  
        this.color = color
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;

    owner!: string; 
    readonly vin: string;

    power(state: boolean){
        if(state === true){
            console.log("Starting the engine.");
    
        }else {
            console.log( "Shutting down engine.");
        }
    }
}

//overridden constructor

class Mercedes extends Car7 {
constructor(color: string, location: string, vin: string, alloyWheels: boolean){
    //we have created mercedes class constructor and then we are calling
    //car7 constructor by using super method
    //super will call the car7 constructor
    super(color, location, vin)
    this.alloyWheels = alloyWheels

}
    alloyWheels: boolean;
    adjustableSuspension = true;

}
 
let myCar = new Mercedes("Silver", "California", "1A", true);
  console.log(myCar);


 

 export{}