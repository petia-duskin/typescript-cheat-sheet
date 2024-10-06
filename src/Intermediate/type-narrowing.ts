// благодаря typeof typescript сделает narrowing типа
function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    return padding + value;
}

// class type narrowing

class Cat {
    meow() {
        console.log("meow")
    }
}

class Dog {
    bark() {
        console.log("bark")
    }
}

type Animal2 = Cat | Dog;

function speak(animal: Animal2) {
    if (animal instanceof Cat) {
        animal.meow()
    }
    if (animal instanceof Dog) {
        animal.bark()
    }
}

// возможность отличать и обрабатывать разные типы, проверяя входит ли определенное свойство в них, таким образом ts поймет что это определенный тип

type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    if ('size' in shape) {
        return shape.size * shape.size
    }

    if ('width' in shape) {
        return shape.width * shape.height;
    }
}

// либо мы можем добавить специальное отдельное свойство в тип, которое будет указывать на конкретный класс

type Circle = {
    kind: 'circle',
    radius: 5
}

type RectanglE = {
    kind: 'rectangle'
    coordinates: [number, number][]
}

let arrt: RectanglE = {
    kind: 'rectangle',
    coordinates: [[0, 0], [1, 1], [2, 2]],
}

type Shape2 = Circle | RectanglE;

function area2(shape: Shape2) {
    if (shape.kind === 'circle') {
        return (shape.radius ** 2) * 3.14
    }

    if (shape.kind === 'rectangle') {
        return shape.coordinates
    }
}

type ValidationSuccess = {
    isValid: true;
    validatedValue: string;
}

type ValidationFailure = {
    isValid: false;
    errorReason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
    if (result.isValid) {
        console.log(result.validatedValue)
    }

    if (!result.isValid) {
        console.log(result.errorReason)
    }
}