function load(): unknown {
    return "Hello world";
}

let hello = load();

// дать понять typescript что переменная точно будет типа string
const trimmed = (hello as string).trim();