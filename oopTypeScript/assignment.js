var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color, height, width, length, weight) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
    return Vehicle;
}());
var Mercedes1 = /** @class */ (function (_super) {
    __extends(Mercedes1, _super);
    function Mercedes1(color, height, width, length, weight, wheels, make, model) {
        var _this = _super.call(this, color, height, width, length, weight) || this;
        _this.wheels = wheels;
        _this.make = make;
        _this.model = model;
        return _this;
    }
    Mercedes1.prototype.power = function (state) {
        if (state === true) {
            console.log("Mercedes engine starting");
            return "Mercedes engine starting";
        }
        else {
            console.log("Mercedes engine shuting down.");
            return "Mercedes engine shuting down.";
        }
    };
    Mercedes1.prototype.speed = function (value) {
        if (value >= 100) {
            console.log("Mercedes Speed is fast.");
            return "Mercedes Speed is fast.";
        }
        else if (value <= 60) {
            console.log("Mercedes Speed is low.");
            return "Mercedes Speed is low.";
        }
        else {
            console.log("Mercedes Speed is moderate.");
            return "Mercedes Speed is moderate.";
        }
    };
    return Mercedes1;
}(Vehicle));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(color, height, width, length, weight, wheels, make, model, seatingCapacity, transmissionType) {
        var _this = _super.call(this, color, height, width, length, weight, wheels, make, model) || this;
        _this.powerSteering = true;
        _this.antiLockBrakingSystem = true;
        _this.driverAirbag = true;
        _this.fogLightInFront = true;
        _this.MultiFunctionSteeringWheel = true;
        _this.PassengerAirbag = true;
        _this.PowerWindowsFront = true;
        _this.AlloyWheels = true;
        _this.seatingCapacity = seatingCapacity;
        _this.transmissionType = transmissionType;
        return _this;
    }
    SUV.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting the Mercedes SUV engine.");
            return ("Starting the Mercedes SUV engine.");
        }
        else {
            console.log("Shutting down Mercedes SUV engine.");
            return ("Shutting down Mercedes SUV engine.");
        }
    };
    return SUV;
}(Mercedes1));
var wajihaCar = new SUV("Black", 50, 60, 500, 500, 4, "Benz", "A 220", 5, "Automatic");
console.log(wajihaCar);
wajihaCar.power(true);
wajihaCar.speed(120);
var Core = /** @class */ (function (_super) {
    __extends(Core, _super);
    function Core() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Core;
}(Mercedes1));
var Coupe = /** @class */ (function (_super) {
    __extends(Coupe, _super);
    function Coupe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coupe;
}(Mercedes1));
var Roadstar = /** @class */ (function (_super) {
    __extends(Roadstar, _super);
    function Roadstar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Roadstar;
}(Mercedes1));
