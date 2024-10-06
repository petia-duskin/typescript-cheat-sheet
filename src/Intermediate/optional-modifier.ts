type Person5 = {
    name: string;
    email: string;
    phone?: string;
}

const bruce: Person5 = {
    name: 'Bruce',
    email: 'deod3oko3d3',
    phone: '210291025'
}

const alfred: Person5 = {
    name: 'Alfred',
    email: 'dok203red02k'
}

console.log(alfred.phone) // undefined