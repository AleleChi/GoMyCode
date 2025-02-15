interface Vehicle{
    make:string,
    model:string,
    year:number,
    start(): void
}

class Car implements Vehicle{
    constructor(public make: string, public model: string, public year: number,){

    }

    start(): void {
        console.log('Car Engine Started')
    }
}

const car1 = new Car("Lexus", "SUV", 2024)
car1.start()