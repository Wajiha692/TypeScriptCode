var Car3 = /** @class */ (function () {
    //whenever the new object create so the constructor function calls
    //constructor function is an optional
    //constructor is a function
    function Car3(color) {
        //'this' keyword is referring our class 'car' 
        //car ka color assign horha
        this.color = color;
    }
    Car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting the engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    };
    return Car3;
}());
//we pass the constructor is color
//whenever new object is created the color must be provided
var myCar1 = new Car3("Silver");
var wajihaCar = new Car3("Red");
console.log("Adil's Car is ".concat(myCar1.color));
console.log(("Wajiha's Car is ".concat(wajihaCar.color)));
