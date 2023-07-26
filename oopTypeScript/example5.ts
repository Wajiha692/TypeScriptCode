class Car5{
   
    constructor(color: string, location: string, vin: string){
  
        this.color = color
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;

  
    owner?: string; 


    readonly vin: string;

    power(state: boolean){
        if(state === true){
            console.log("Starting the engine.");
    
        }else {
            console.log( "Shutting down engine.");
        }
    }
}
let myCar1 = new Car5("Silver", "Lahore", "1A");
let wajihaCar = new Car5("Red", "Karachi", "2B");
 console.log(`Adil's Car is ${myCar1.color}`);
 console.log((`Wajiha's Car is ${wajihaCar.color}`));
 console.log((`Wajiha's Car is ${wajihaCar.location}`));
 console.log((`Wajiha's Car is ${wajihaCar.vin}`));


//is trh se  hum dekhskte hain jb bhi class create krte hain
//toh uski type bhi create hojayegi so we can reuse their  class type anywhere
//dosre objects k upper reinforce krne k lye
 let alexanderCar: Car5;

 alexanderCar = {
    vin: "'1F",
    color: "Brown",
    location: "America",
    power() {}
 }
 


 export{}