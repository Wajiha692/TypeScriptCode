var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = "Silver";
    }
    //this is a method of power which is having a parameter
    //that car is on or off which means (true / false) (state is a parameter)
    Car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting the engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    };
    return Car2;
}());
//we will declare a variable that store a object that will create by using above class
//mycar is an object
var myCar = new Car2();
myCar.power(true);
console.log(myCar);
