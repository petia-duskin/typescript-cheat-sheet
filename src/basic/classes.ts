class Animal {
    private name: string;
    public age: number;
    protected value: string;


    constructor(name: string, age: number, value: string) {
        this.name = name;
        this.age = age;
        this.value = value;
    }

    public move(distance: number): void {
        console.log(distance);
    }
}

let cat = new Animal('Cat', 5, "55");
// cat.name // Error

class Bird extends Animal {
    public fly(distance: number) {
        console.log(distance + this.value);
    }
}