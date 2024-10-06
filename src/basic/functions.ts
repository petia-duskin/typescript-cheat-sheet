function add(a: number, b: number): number {
    return a + b;
}

function log1(message: string): void {
    console.log("Log:", message)
}

function sum(...values: number[]): number {
    return values.reduce((prev, current) => prev + current, 0);
}

sum(1, 2)
sum(1, 2, 3)

let addFunc: (a: number, b: number) => number;

addFunc = function (a: number, b: number): number {
    return a + b;
}

// Мы можем вынести тип функции в отдельный тип
type Add = (a: number, b: number) => number;