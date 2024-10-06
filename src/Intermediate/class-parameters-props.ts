class Person {
    constructor(
        private name: string,
        public age: number
    ) {}
}

const person = new Person('Person', 55)
console.log(person.age)