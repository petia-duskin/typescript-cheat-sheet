let exampleAny: any;
let exampleUnknown: unknown;

// any
// можем присваивать какие угодно значения разных типов
exampleAny = 123;
exampleUnknown = "Hello world"

// unknown
// также присваивать какие угодно значения разных типов
exampleUnknown = 123;
exampleUnknown = "Hello world"

// различия any и unknown
// any

// Мы можем обращаться к методам или свойствам, которые не существуют
exampleAny.allows.anything.you.want.imagine();
// присваивать тип any любой другой переменной
let anySetBool: boolean = exampleAny

// unknown
// более безопасный тип, в том плане что мы должны проверять его тип
if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim()
}

if (typeof exampleUnknown === 'boolean') {
    let unknownSetBool: boolean = exampleUnknown;
}

function log(value: unknown) {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value)
    }
}

log(123.211);
log("Hello world")