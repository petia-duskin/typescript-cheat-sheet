type User = { id: string };
type Product = { id: string };

let user: User = {id: 'useroo2k3o'}
let product: Product = {id: 'deoodkoekd'};

// Typescript нет дела до названия типов, только до их структуры, поэтому мы можем присваивать переменным однинаковой структуры значения друг друга

user = product;
product = user;

// Extra info is ok

type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};

let point2D: Point2D = {x: 0, y: 10};
let point3D: Point3D = {x: 0, y: 10, z: 5};

point2D = point3D;
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D);

// Error, missing info

// point3D = point2D // Error
