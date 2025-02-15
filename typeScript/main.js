var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Car Engine Started');
    };
    return Car;
}());
var car1 = new Car("Lexus", "SUV", 2024);
car1.start();
