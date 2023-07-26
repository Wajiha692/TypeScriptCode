class Vehicle{

    constructor(color: string, height: number, width: number, length: number, weight: number){
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
    color: string;
    height: number;
    width: number;
    length: number;
    weight: number;

}
class Mercedes1 extends Vehicle{

    constructor(color: string, height: number, width: number, length: number, weight: number, wheels: number, make: string, model: string){
        super(color, height, width, length, weight)
        this.wheels = wheels;
        this.make = make;
        this.model = model;
    }
    wheels: number;
    make: string;
    model: string;
    power(state: boolean): string{
        if(state === true){
            console.log("Mercedes engine starting");
            
            return "Mercedes engine starting"
        } else{
            console.log("Mercedes engine shuting down.");
            
            return "Mercedes engine shuting down.";
        }

    }
    speed(value: number): string{
        if(value >= 100){

            console.log("Mercedes Speed is fast.");
            return "Mercedes Speed is fast."
        }else if (value <= 60){
            console.log("Mercedes Speed is low.");
            
            return "Mercedes Speed is low."
        }else{
            console.log("Mercedes Speed is moderate.");
            
            return "Mercedes Speed is moderate."
        }
    }
}
class SUV extends Mercedes1{
    constructor(color: string, height: number, width: number, length: number, weight: number, wheels: number, make: string, model: string, seatingCapacity: number, transmissionType: string){
        super(color, height, width, length, weight, wheels, make, model);
        this.seatingCapacity = seatingCapacity;
        this.transmissionType = transmissionType;
    
    }
    transmissionType: string;
    seatingCapacity: number
    powerSteering= true;
    antiLockBrakingSystem = true;
    driverAirbag = true;
    fogLightInFront = true;
    MultiFunctionSteeringWheel = true;
    PassengerAirbag = true;
    PowerWindowsFront = true;
    AlloyWheels = true;

    power(state: boolean): string{
        if(state === true){

            console.log("Starting the Mercedes SUV engine.");
           return("Starting the Mercedes SUV engine.");

        }else{
            console.log("Shutting down Mercedes SUV engine.");
            return( "Shutting down Mercedes SUV engine.");
        }
    }
}
let wajihaCar = new SUV("Black", 50, 60, 500, 500, 4, "Benz", "A 220", 5, "Automatic");
console.log(wajihaCar);
wajihaCar.power(true);
wajihaCar.speed(120);



class Core extends Mercedes1{

}
class Coupe extends Mercedes1{}
class Roadstar extends Mercedes1{}