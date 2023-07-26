class Car4{
   
    constructor(color: string, location: string, vin: string){
  
        this.color = color
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;

    //optional and initialising properties
    //here exclamanation mark, we are telling tyescript that whenever we use owner property 
    //we will always assign a value to owner property
    //or we can create it optional ?
    owner!: string; 


    //read-only property is that property which we cannot change in future
    //vin is car number
    //if we want k agr kisi object ki property stable rahe so we will make it readonly property
    readonly vin: string;

    power(state: boolean){
        if(state === true){
            console.log("Starting the engine.");
    
        }else {
            console.log( "Shutting down engine.");
        }
    }
}
let myCar1 = new Car4("Silver", "Lahore", "1A");
let wajihaCar = new Car4("Red", "Karachi", "2B");
 console.log(`Adil's Car is ${myCar1.color}`);
 console.log((`Wajiha's Car is ${wajihaCar.color}`));
 console.log((`Wajiha's Car is ${wajihaCar.location}`));
 console.log((`Wajiha's Car is ${wajihaCar.vin}`));

// wajihaCar.vin = "2C";
 export{}