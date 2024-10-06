interface POint2D {
    x: number;
    y: number;
}

// расширение интерфейса
interface POint3D extends POint2D {
    z: number;
}

// interface declaration merging

interface Request {
    body: any;
}

interface Request {
    json: any;
}

function handleRequest(req: Request) {
    req.body;
    req.json;
}

// интерфейсы не поддерживают короткого обозначения типа, например

type InputOnChange = (newValue: InputValue) => void;

// интерфейсы не поддерживают возможность присвоения примитива

type InputValue = string;