class Car3{
    //whenever the new object create so the constructor function calls
    //constructor function is an optional
    //constructor is a function

    constructor(color: string, location: string){
        //'this' keyword is referring our class 'car' 
        //car ka color assign horha
        this.color = color
        this.location = location;
    }
    color: string;
    location: string;

    power(state: boolean){
        if(state === true){
            console.log("Starting the engine.");
    
        }else {
            console.log( "Shutting down engine.");
        }
    }
}
//we pass the constructor is color
//whenever new object is created the color must be provided
let myCar1 = new Car3("Silver", "Lahore");
let wajihaCar = new Car3("Red", "Karachi");
 console.log(`Adil's Car is ${myCar1.color}`);
 console.log((`Wajiha's Car is ${wajihaCar.color}`));
 console.log((`Wajiha's Car is ${wajihaCar.location}`));

 export{}
 
 