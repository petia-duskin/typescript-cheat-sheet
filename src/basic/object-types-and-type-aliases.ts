let center: { x: number, y: number } = {
    x: 0,
    y: 0
};

let unit: { x: number, y: number } = {
    x: 1,
    y: 1
}

// Вместо постоянного копирования одних и тех же типов, можно переиспользовать тип как alias

type Point = { x: number, y: number };

let center2: Point = {
    x: 0,
    y: 0
}

center2 = {
    x: 5,
    y: 5
}

let unit2: Point = {
    x: 1,
    y: 1
}


// Определение переменной как const, поведение такое же как и в js

const obj: Point = {x: 1, y: 1};

// obj = {x: 2, y: 2} // Error
obj.x = 5
obj.y = 5