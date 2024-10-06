type Point1 = {
    readonly x: number;
    readonly y: number;
}

const point: Point1 = {
    x: 0,
    y: 0
}

// point = {x: 1, y: 1} // Error const mutation

// Error, trying to update readonly variable
// point.x = 1 // Error
// point.y = 1 // Error

class Animal1 {
    public readonly name: string;


    constructor(name: string) {
        this.name = name;
    }
}

const sheep = new Animal1('sheep')
console.log(sheep.name)
// sheep.name = 'wolf' // Error