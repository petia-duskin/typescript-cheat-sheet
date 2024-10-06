type PoinT2D = {
    x: number;
    y: number;
}

type PoinT3D = PoinT2D & {
    z: number;
}

type Person1 = {
    name: string;
}

type Email = {
    email: string;
}

type Phone = {
    phone: string;
}

function contact(details: Person1 & Email & Phone) {
    console.log(details.name)
    console.log(details.phone)
    console.log(details.email)
}