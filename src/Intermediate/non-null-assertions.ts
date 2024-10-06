type Point11 = {
    x: number;
    y: number;
}

let point11: Point11;

function initialize() {
    point11 = {x: 5, y: 5};
}


initialize()
console.log(point11!.x, point11!.y);

