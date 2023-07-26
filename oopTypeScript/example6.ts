class Car6{
   
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

//extends or inherit the class 
//now mercedes class contain the car properties
class Mercedes extends Car6 {

    alloyWheels = true;
    adjustableSuspension = true;

}
 
let myCar = new Mercedes("Blue", "Karachi", "1W");
console.log(myCar);
myCar.power(true);

 

 export{}


 //object oriented programming have pillars
 // 1) Encapsulation means kisi bhi cheez ka access restrict krden
 //for instance you can enclosed the object in capsule.
 //for example capsule, you closed the tablet in the capsule
 //objects ki properties ko public or private banaskte hain


 // 2)Abstraction: kisi bhi cheez ki complexity remove krke usko simple bana ne ko abstraction kehte hain
 // when we create classes, we simplify the complex objects or unko aese create krte hain k wo usable ho
 

 // 3) Inheritance: means wirasat

 // 4)Polymorphism: poly means many and morphism means forms.
 // a real life example of polymorphism can be a person who has multiple different roles simultaneously
 // like a mother, this same woman behaves differently in different situations depending on the role
 // oop allows us to implement a single phase in different ways 